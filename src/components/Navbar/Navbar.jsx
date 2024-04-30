import React, { useState } from 'react'
import logo from '../../images/logo.png'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggleMenu , setToggleMenu] = useState(false);
    const handleNavbar = () => setToggleMenu(!toggleMenu);
  return (
    <nav className='fixed w-full bg-white ' id='navbar'>
        <div>
            <div className='flex justify-between px-5'>
                <Link to='/' className='flex items-center'>
                    <img src={logo} alt="book" className='w-[10vh]'/>
                    <p>BookLab</p>
                </Link>
                <button type='button' onClick={handleNavbar} className='lg:hidden z-20'>
                    <HiOutlineMenuAlt3 size={35} style={{color: `${toggleMenu ? '#fff' : '#010101'}`}} />
                </button>
            </div>

            <div className={toggleMenu ? 'navbar-show navbar-collapse lg:hidden lg:bg-transparent' : 'navbar-collapse lg:hidden lg:bg-transparent'}>
                <ul className='text-white '>
                    <li className='py-4 pl-10'>
                        <Link to='/' className='font-semibold hover:text-gray-400 transition-all 1s' style={{fontSize: '20px'}}>Home</Link>
                    </li>
                    <li className='py-4 pl-10'>
                        <Link to='/book' className='font-semibold hover:text-gray-400 transition-all 1s' style={{fontSize: '20px'}}>Books</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar