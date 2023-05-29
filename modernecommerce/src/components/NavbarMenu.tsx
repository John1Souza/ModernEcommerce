import styled from "styled-components";
import { Saira_Stencil_One } from "next/font/google";

const sairaStencilOne = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});


import { Poppins } from "next/font/google";
import Image from "next/image";


const poppins = Poppins({
  weight: ["500", "400", "300", "600"],
  subsets: ["latin"],
});

const Logo = styled.a`
  display: flex;
  align-items: center;
  color: var(--logo-color);
  font-size: 2rem;

  padding: 1.5rem;

  :hover {
    cursor: pointer;
  }
`;
const Navbar = styled.nav`
  display: grid;
  grid-template-columns: 1.5fr 2fr 1.5fr;
  width: 1440px;

  background-color: transparent;

  position: relative;
  z-index: 1;

  @media only screen and (max-width: 319px) {
    display: none;
  }
  @media only screen and (min-width: 320px) and (max-width: 479px){
    display: none;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    display: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 991){
    
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px){
    
  }
  @media only screen and (min-width: 1200px) {
    
  }
`
const NavbarIcons = styled.nav`
  display: flex;
`
const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: .5rem;

`;

const NavbarListItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  padding: 1.5rem;
  margin: 0 .5rem 0 .5rem;  
  display: inline-block;
  background-image: linear-gradient(black, black), linear-gradient(transparent, transparent);
  background-size: 0 5px, auto;
  background-repeat: no-repeat;
  background-position: center bottom;
  transition: all .25s ease-out;
  
  :hover {
    cursor: pointer;
    /* The following line makes the underline only as wide as the text */
    /* background-size: calc(100% - 2em) 5px, auto; */
    background-size: 100% 5px, auto;
  }
  
`;
const NavbarListIcons = styled.ul`
  /* width: 100%; */
  display: flex;
  justify-content: space-around;
  /* grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center; */
  padding: 2rem;
  margin: 0 auto;
  gap: 2.5rem;
`;

const NavbarListIconsItem = styled.li`
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.5rem;
  margin: 0 auto;

  list-style: none;

  :hover {
    cursor: pointer;
  }
`;
export function NavbarMenu() {
  return (
    <Navbar>
        <Logo className={sairaStencilOne.className}>ModernEcommerce</Logo>
        <NavbarList className={poppins.className}>
          <NavbarListItem>Home</NavbarListItem>
          <NavbarListItem>Shop</NavbarListItem>
          <NavbarListItem>About</NavbarListItem>
          <NavbarListItem>Contact</NavbarListItem>
        </NavbarList>
        <NavbarIcons>
          <NavbarListIcons className={poppins.className}>
            <NavbarListIconsItem>
              <Image
                src="/ShopFigures/not.svg"
                alt="people image"
                width={23.33}
                height={18.67}
              />
            </NavbarListIconsItem>
            <NavbarListIconsItem>
              <Image
                src="/ShopFigures/search.svg"
                alt="people image"
                width={22.17}
                height={22.17}
              />
            </NavbarListIconsItem>
            <NavbarListIconsItem>
              <Image
                src="/ShopFigures/heart.svg"
                alt="people image"
                width={23.33}
                height={20.81}
              />
            </NavbarListIconsItem>
            <NavbarListIconsItem>
              <Image
                src="/ShopFigures/car.svg"
                alt="people image"
                width={24.53}
                height={22.06}
              />
            </NavbarListIconsItem>
          </NavbarListIcons>
        </NavbarIcons>
        </Navbar>
  )
}
