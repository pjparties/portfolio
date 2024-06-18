import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png';

const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };


    return (
        <div className='bg-background flex justify-between items-center py-5 max-w-[1240px]'>
            {/* Logo */}
            <img src={logo} alt='logo' title='look at you being meticulous' className='w-10 h-10 z-10 ease-in-out' />
            {/* Desktop Navigation */}
            <ul className='hidden md:flex'>
                <li >
                    <NavLink to='/' className='p-4 hover:text-accent hover:font-bold text-primary mr-1 py-[10px] px-6 cursor-pointer duration-100' >
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' className='p-4 hover:text-accent hover:font-bold text-primary mr-1 py-[10px] px-6 cursor-pointer duration-100'>
                        ABOUT
                    </NavLink>
                </li>
                <li >
                    <Link to='https://drive.google.com/file/d/1DSsBQ-5B7PWgkvMxHWVFi76wBePdqePO/view' title='Resume pdf' className='p-4 hover:text-accent hover:font-bold text-primary mr-1 py-[10px] px-6 cursor-pointer duration-100'>
                        RESUME
                    </Link>

                </li>
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
                        : 'md:hidden ease-in-out w-[100%] left-0 flex flex-col items-center justify-center -z-10 duration-500 fixed bottom-0 top-[-200%] '
                }
            >
                {/* Mobile Navigation Items */}
                <li className='my-[12px] mr-[1px]'>
                    <NavLink to="/" className='p-4 hover:text-accent text-lg px-[24px] hover:font-bold text-primary py-[10px] cursor-pointer duration-100'>
                        HOME
                    </NavLink>
                </li>
                <li className='my-[12px] mr-[1px]'>
                    <NavLink to="/about" className='p-4 hover:text-accent text-lg my-[12px] px-[24px] hover:font-bold text-primary mr-1 py-[10px]  cursor-pointer duration-100'>
                        ABOUT
                    </NavLink>
                </li>
                <li className='my-[12px] mr-[1px]'>
                    <Link to='https://drive.google.com/file/d/1DSsBQ-5B7PWgkvMxHWVFi76wBePdqePO/view' className='p-4 hover:text-accent text-lg my-[12px] px-[24px] hover:font-bold text-primary mr-1 py-[10px]  cursor-pointer duration-100'>
                        RESUME
                    </Link>
                </li>

            </ul>
        </div>
    );
};

export default Navbar;