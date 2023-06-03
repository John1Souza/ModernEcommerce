import styled from "styled-components";


export const Logo = styled.a`
  display: flex;
  align-items: center;
  color: var(--logo-color);
  font-size: 2rem;

  padding: 1.5rem;

  :hover {
    cursor: pointer;
  }
`
export const Navbar = styled.nav`
  display: grid;
  grid-template-columns: 1.5fr 2fr 1.5fr;
  width: var(--max-width);

  background-color: transparent;

  position: relative;
  z-index: 1;

  @media screen and (max-width: 767px) {
    display: none;
  }
 
  @media only screen and (min-width: 768px) and (max-width: 991) {
   
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
export const NavbarIcons = styled.nav`
  display: flex;
`;
export const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 0.5rem;
`;

export const NavbarListItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  padding: 1.5rem;
  margin: 0 0.5rem 0 0.5rem;
  display: inline-block;
  background-image: linear-gradient(black, black),
    linear-gradient(transparent, transparent);
  background-size: 0 0.325rem, auto;
  background-repeat: no-repeat;
  background-position: center bottom;
  transition: all 0.25s ease-out;

  :hover {
    cursor: pointer;
    background-size: 100% 0.325rem, auto;
  }
`;
export const NavbarListIcons = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  margin: 0 auto;
  gap: 2.5rem;
`;

export const NavbarListIconsItem = styled.li`
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.5rem;
  margin: 0 auto;

  list-style: none;

  transition: all 0.25s ease-out;

  :hover {
    transform: scale(1.35);
    cursor: pointer;
  }
`

interface HeaderProps {

}

export const TagHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100vw;
  max-width: var(--max-width);
  height: 100px;
`;

