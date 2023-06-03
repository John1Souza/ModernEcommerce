import styled from "styled-components";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const NavMenu = styled.nav`
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
    left: 0;
    transition: 350ms;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
export const LinkStyle = styled.a`
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

export const NavMenuItems = styled.ul`
  /* Add your styles for the nav-menu-items class */
  width: 100%;
`;

export const NavbarToggle = styled.li`
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

export const NavMenuList = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: .5rem 0px .5rem 1rem;
    list-style: none;
    height: 3rem;

    a {
        text-decoration: none;
        color: var(--almost-white);
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
export const Span = styled.span`
    color: #000;
    margin-left: 1rem;

`



export const Bars = styled(FaIcons.FaBars)`
    width: 1.5rem;
    height: 1.5rem;
    
`
export const OutlineClose = styled(AiIcons.AiOutlineClose )`
    width: 1.5rem;
    height: 1.5rem;
    
`