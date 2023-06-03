import { useState } from 'react';
import Link from "next/link";
import { IconContext } from 'react-icons';

import {Bars, LinkStyle, NavMenu,NavMenuItems,NavMenuList,NavbarToggle,OutlineClose,Span} from './HamburgerMenuStyle'
import { HamburgerMenuData } from './HamburgerMenuData';


export default function HamburgerMenuNavbar() {
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
                {HamburgerMenuData.map((item, index) => (
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
