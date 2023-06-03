import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import * as IoIcons from "react-icons/io";

interface HamburgerMenuItem {
    cName: string;
    path: string;
    icon: React.ReactNode;
    title: string;
  }

export const HamburgerMenuData: HamburgerMenuItem [] = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title: 'Shop',
        path: '/shop',
        icon: <FiIcons.FiShoppingBag />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiOutlineInfoCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/',
        icon: <IoIcons.IoIosContact />,
        cName: 'nav-text'
    },
    {
        title: 'Shopping Cart',
        path: '/shoppingcart',
        icon: <FiIcons.FiShoppingCart />,
        cName: 'nav-text'
    },
    
]