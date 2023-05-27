import styled  from "styled-components" 

import { Saira_Stencil_One } from 'next/font/google'

const sairaStencilOne = Saira_Stencil_One({
   weight: ["400"], 
   subsets: ['latin']
  })

import { Poppins } from 'next/font/google'

const poppins = Poppins({
   weight: ["500", "400", "300", "600"], 
   subsets: ['latin']
  })

interface HeaderProps {

}

const TagHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 100px;
`
const Logo = styled.a`
    position: absolute;
    top: 20%;
    left: 10%;
    color: var(--logo-color);
    font-weight: 400px;
    font-size: 40px;
    line-height: 150%;
`
const Navbar = styled.nav`
    display: flex;    
    justify-content: center;
    align-items: center;
     
`
const NavbarList = styled.ul`
    display: flex;    
    justify-content: space-around;
    list-style: none; 
`

const NavbarListItem = styled.ul`
    font-size: 16px;
    line-height: 24px;
    padding: 38px; 
     
`

export function Header(props : HeaderProps) {
  return (
    <TagHeader>
        <Logo className={sairaStencilOne.className}>ModernEcommerce</Logo>        
        <Navbar>
            <NavbarList className={poppins.className}>
                <NavbarListItem>Home</NavbarListItem>
                <NavbarListItem>Shop</NavbarListItem>
                <NavbarListItem>About</NavbarListItem>
                <NavbarListItem>Contact</NavbarListItem>
            </NavbarList>
        </Navbar>        
    </TagHeader>
  )
}
