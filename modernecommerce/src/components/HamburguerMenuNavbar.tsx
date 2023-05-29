import { useState } from 'react';
import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import styled from "styled-components";
import { HamburguerMenuData } from './HamburguerMenuData'
import { IconContext } from 'react-icons';

const MenuBars = styled.a`
  
`;

const NavMenu = styled.nav`
  /* Add your styles for the nav-menu class */
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;
  width: 15rem;
  height: 100vh;
  background-color: #ffffff;
  border: 1px solid #000;

  padding: 0 1rem 1rem 0;
  &.active {
    /* Add your styles for the active state */
    left: 0;
    transition: 350ms;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const LinkStyle = styled.a`
  /* Add your styles for the nav-menu class */
  /* background-color: #060b26; */
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  position: absolute;
  top: 0;

  @media only screen and (min-width: 768px) {
    display: none;
  }
 
`;

const NavMenuItems = styled.ul`
  /* Add your styles for the nav-menu-items class */
  width: 100%;
`;

const NavbarToggle = styled.li`
  /* Add your styles for the navbar-toggle class */
  /* background-color: #060b26; */
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: start;
  align-items: center;

  margin-left: 1rem;
  padding-top: 1rem;

  > a {
    margin: 0 auto;
    font-size: 1rem;
    background: none;
    /* padding: .25rem 2rem 2rem 2rem; */ 
  }
`;

const NavMenuList = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: .5rem 0px .5rem 1rem;
    list-style: none;
    height: 3rem;

    > a {
        text-decoration: none;
        color: #f5f5f5;
        font-size: 1rem;
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        border-radius: .25rem;
    } 

    &:hover {
        backdrop-filter: blur(5px);
        background-color: rgba(0, 0, 0, 0.15);
        opacity: 0.5;
        transition: opacity 0.3s ease; 
        border-radius: 5px;       
    }
`
const Span = styled.span`
    color: #000;
    margin-left: 1rem;

`



const Bars = styled(FaIcons.FaBars)`
    width: 1.5rem;
    height: 1.5rem;
    
`
const OutlineClose = styled(AiIcons.AiOutlineClose )`
    width: 1.5rem;
    height: 1.5rem;
    
`


export function HamburguerMenuNavbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
  return (
    <>

        <IconContext.Provider value={{ color : '#000'}}>
            <LinkStyle href="#">
                <Bars onClick={showSidebar}/>
            </LinkStyle>
            <NavMenu className={sidebar ? "active" : ""}>
                <NavMenuItems onClick={showSidebar}>
                <NavbarToggle>
                    <Link href="#">
                        <OutlineClose />   
                    </Link>
                </NavbarToggle>
                {HamburguerMenuData.map((item, index) => (
                    <NavMenuList key={index} className={item.cName}>
                        <Link href={item.path}>
                            {item.icon}
                            <Span>{item.title}</Span>
                        </Link>
                    </NavMenuList>
                ))}
                </NavMenuItems>
            </NavMenu>
        </IconContext.Provider>
    </>
  )
}
