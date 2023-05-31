import styled from "styled-components";

import HamburguerMenuNavbar from "./HamburguerMenuNavbar";
import  NavbarMenu  from "./NavbarMenu";


import { Poppins } from "next/font/google";


const poppins = Poppins({
  weight: ["500", "400", "300", "600"],
  subsets: ["latin"],
});

interface HeaderProps {

}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100vw;
  max-width: var(--max-width);
  height: 100px;
`;




export default function Header(props: HeaderProps) {
   
  return (
    <TagHeader>
        <HamburguerMenuNavbar />
        <NavbarMenu />
    </TagHeader>
  );
}
