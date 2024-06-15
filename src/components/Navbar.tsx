import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png';

const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);


    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'HOME', href: '/' },
        { id: 2, text: 'ABOUT', href: '/about' },
        { id: 3, text: 'RESUME', href: '/resume' },
    ];

    return (
        <div className='bg-background flex justify-between items-center py-5 max-w-[1240px]'>
            {/* Logo */}
            <img src={logo} alt='logo' className='w-10 h-10 z-10 ease-in-out' />
            {/* Desktop Navigation */}
            <ul className='hidden md:flex'>
                {navItems.map(item => (
                    <li
                        key={item.id}
                    >
                        <NavLink to={item.href} className="p-4 hover:text-accent hover:font-bold text-primary mr-1 py-[10px] px-6 cursor-pointer duration-100">
                            {item.text}
                        </NavLink>

                    </li>
                ))}
            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden z-10'>
                {nav ? <AiOutlineClose size={20} className='text-primary' /> : <AiOutlineMenu size={20} className='text-primary' />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed md:hidden z-0 top-0 w-[100%] bg-background ease-in-out duration-500 h-[100%] left-0 flex flex-col items-center justify-center'
                        : 'md:hidden ease-in-out w-[100%] left-0 flex flex-col items-center justify-center z-0 duration-500 fixed bottom-0 top-[-200%] '
                }
            >
                {/* Mobile Navigation Items */}
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 hover:text-accent text-lg my-[12px] px-[10px] hover:font-bold text-primary mr-1 py-[10px]  cursor-pointer duration-100'
                    >
                        <NavLink to={item.href}>
                            {item.text}
                        </NavLink>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;