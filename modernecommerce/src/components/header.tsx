import { FiSearch } from "react-icons/fi"
import styled  from "styled-components" 

import { Saira_Stencil_One } from 'next/font/google'

const sairaStencilOne = Saira_Stencil_One({
   weight: ["400"], 
   subsets: ['latin']
  })

import { Poppins } from 'next/font/google'
import Image from "next/image"

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
    width: 1440px;
    height: 100px;
`
const Logo = styled.a`
    position: absolute;
    left: 0;
    top: 0; 
    color: var(--logo-color);
    font-size: 2.5rem;
    padding: 0.5rem 0 1.25rem 2rem;
`
const Navbar = styled.nav`    
    
     
`
const NavbarList = styled.ul`  
    display:flex;  
    justify-content: center;
    align-items: center;
    /* justify-content: space-around; */
    list-style: none; 
`

const NavbarListItem = styled.ul`
    font-size: 1rem;
    line-height: 24px;
    padding: 2.375rem; 
     
`
const NavbarListIcons = styled.ul`
    display: flex;  
    justify-content: space-around;
    align-items: center;        
    margin-right: 5rem;
    padding: 2rem;
    position:absolute;
    right: 0;
    top: 0;
    gap: 1rem;
`

const NavbarListIconsItem = styled.ul`
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 0.5rem;     
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
            <NavbarListIcons className={poppins.className}>
                <NavbarListIconsItem>
                    <Image src="/ShopFigures/not.svg" alt="people image" width={23.33} height={18.67}/>
                </NavbarListIconsItem>
                
                <NavbarListIconsItem>
                    <Image src="/ShopFigures/search.svg" alt="people image" width={22.17} height={22.17}/>
                </NavbarListIconsItem>
                
                <NavbarListIconsItem>
                    <Image src="/ShopFigures/heart.svg" alt="people image" width={23.33} height={20.81}/>
                </NavbarListIconsItem>
                
                <NavbarListIconsItem>
                    <Image src="/ShopFigures/car.svg" alt="people image" width={24.53} height={22.06}/>
                </NavbarListIconsItem>
                
            </NavbarListIcons>
        </Navbar>        
    </TagHeader>
  )
}
