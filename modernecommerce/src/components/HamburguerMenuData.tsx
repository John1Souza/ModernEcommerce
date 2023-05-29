import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import * as FiIcons from "react-icons/fi";
import * as IoIcons from "react-icons/io";

interface HamburguerMenuItem {
    cName: string;
    path: string;
    icon: React.ReactNode;
    title: string;
  }

export const HamburguerMenuData: HamburguerMenuItem [] = [
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