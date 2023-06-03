import { Logo,Navbar,NavbarIcons,NavbarList,NavbarListIcons,NavbarListIconsItem,NavbarListItem,TagHeader } from './headerStyle';

import { Saira_Stencil_One } from "next/font/google";

const sairaStencilOne = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

import { Poppins } from "next/font/google";
import Image from "next/image";
import HamburgerMenuNavbar from "../HamburgerMenu/HamburgerMenuNavbar";
import Link from 'next/link';

const poppins = Poppins({
  weight: ["500", "400", "300", "600"],
  subsets: ["latin"],
});




export default function Header() {
   
  return (
    <TagHeader>
        <HamburgerMenuNavbar />
        <Navbar>
          <Logo className={sairaStencilOne.className}><Link href="/Home">Modern Ecommerce</Link></Logo>
          <NavbarList className={poppins.className}>
            <NavbarListItem><Link href="/">Home</Link></NavbarListItem>
            <NavbarListItem><Link href="/shop">Shop</Link></NavbarListItem>
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
    </TagHeader>
  );
}
