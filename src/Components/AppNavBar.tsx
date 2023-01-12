import { Button, NavbarToggleProps, styled } from "@nextui-org/react"
import {Navbar,Text,Link, Image,Col,} from '@nextui-org/react'
import Logo from '../../public/images/logo.png'
import Linker from 'next/link';
import { Box } from "./Layout";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import test from "node:test";
import React from "react";


const BoxMenu =styled("div",{
  color:"black",

  alignContent:"center",
  justifyContent:"center",
  display:"flex",
  flex:1,
  mw:50,
  boxSizing:'content-box',
  h:"90%",
  alignItems:"center",
  pl:"$10",
  pr:"$10",
  borderBottom:"$neutralSolidContrast solid",
  
  variants:{
    isActive:{
      true:{
        borderBottom:"$secondary solid",
        fontWeight:"$bold"
      }
    }
  },
  "a":{

    color:"black",
    fontWeight:"$",
    fontSize:18,
    display:"flex",
    flex:"1",
    p:"$1"
  }
})

export function AppNavbar(){
  const pathname = usePathname();
  console.log(pathname)
  const collapseItems = [
    {title:"Pagina Inicial",link:"/"},
    {title:"Serviços",link:"/services"},
    {title:"Preços",link:"/price"},
    {title:"Blog",link:"/blog"},
    {title:"Contato",link:"/contact"},

  ];


  const [showMenu,setShowMenu] = useState(false)
  function handleMenu(){
    //   const ele = document.getElementsByClassName("nextui-c-gpbAMl-iPooNr-isExpanded-true")[0]
    // ele.classList.remove("nextui-c-gpbAMl-iPooNr-isExpanded-true")
    
   console.log("defaultProps?.isSelected")
    document.getElementsByTagName("body")[0].style.overflow = ''
    setTimeout(() => {
      setShowMenu(!showMenu)

    }, 100);
  }
  return(
    
    <>

    <Navbar  shouldHideOnScroll={false} isBordered variant="sticky" css={{ backgroundColor:"white",boxSizing:"border-box"}} >
    <Navbar.Brand css={{  display:"flex",flex:1, backgroundColor:"white",boxSizing:"border-box","@sm":{ flex:0 }}} >
      <Navbar.Toggle  isSelected={showMenu}   onClick={()=>setShowMenu(!showMenu)}  showIn={"xs"}/>
      <Image objectFit='contain' width={200}  src={Logo.src}/>
    </Navbar.Brand>
      <Navbar.Collapse  isOpen={!!showMenu}>
        {collapseItems.map((item) => (
          <Navbar.CollapseItem key={item.title}>
            <Linker 
              color="black"
                onClick={()=>handleMenu()}
              href={item.link}
            >
              <Text b >

              {item.title}
              </Text>
            </Linker>
          </Navbar.CollapseItem>
        ))}
        
      </Navbar.Collapse>

        <Navbar.Content css={{}} activeColor={"secondary"} hideIn="xs"  variant="underline">
          
              <BoxMenu isActive={pathname==="/"}>
              <Linker href={"/"}>
                Início
              </Linker>
                </BoxMenu>
                
              <BoxMenu isActive={pathname==="/services"} >
              <Linker href={"/services"}>
                Servicos
              </Linker>
              </BoxMenu>
              
              <BoxMenu isActive={pathname==="/price"}>
              <Linker href={"/price"}>
                Preços
              </Linker>
              </BoxMenu>
              
              <BoxMenu isActive={pathname==="/contact"}>
              <Linker href={"/contact"}>
                Contato
              </Linker>

              </BoxMenu>

       
            

        </Navbar.Content>
    </Navbar>
    </>
  )
}