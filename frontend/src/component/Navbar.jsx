import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const navigate = useNavigate();
    

    const {token,setToken, userData} = useContext(AppContext)
    const [showMenu, setShowMenu] = useState(false);
    // const [token, setToken] = useState(true);

    const logout = () =>{
        setToken(false)
        localStorage.removeItem("token")
    }
    
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400'>
            {/* Logo */}
            <div onClick={() => navigate("/")} className='logo text-2xl text-blue-800 font-bold cursor-pointer'>
                <span>Care</span><strong>Buddy</strong>
            </div>

            {/* Desktop Menu */}
            <ul className='hidden md:flex items-center gap-5 font-medium'>
                <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary' : ''}>
                    <li className='py-1'>HOME</li>
                </NavLink>
                <NavLink to="/doctors" className={({ isActive }) => isActive ? 'text-primary' : ''}>
                    <li className='py-1'>ALL DOCTORS</li>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'text-primary' : ''}>
                    <li className='py-1'>ABOUT</li>
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-primary' : ''}>
                    <li className='py-1'>CONTACT</li>
                </NavLink>
            </ul>

            {/* Right Section */}
            <div className='flex items-center gap-4'>
                {token && user 
                ? (
                    <div className='relative cursor-pointer flex items-center gap-2'>
                        <img className='w-8 rounded-full' src={userData.image} alt="Profile" onClick={toggleDropdown} />
                        <img className='w-2.5' src={assets.dropdown_icon} alt="Dropdown" onClick={toggleDropdown} />
                        {showDropdown && (
                            <div className='absolute top-12 right-0 bg-white shadow-lg rounded-md py-2'>
                                <div className='flex flex-col gap-2 px-4'>
                                    <p onClick={() => { navigate("/my-profile"); setShowDropdown(false); }} className='cursor-pointer hover:text-black'>My Profile</p>
                                    <p onClick={() => { navigate("/my-appointment"); setShowDropdown(false); }} className='cursor-pointer hover:text-black'>My Appointment</p>
                                    <p onClick={() => { logout ; setShowDropdown(false); }} className='cursor-pointer hover:text-black'>Logout</p>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <button onClick={() => navigate("/login")} className='hidden md:block bg-primary text-white px-8 py-3 rounded-full'>
                        GET STARTED
                    </button>
                )}

                {/* Hamburger Menu Icon */}
                <img 
                    onClick={() => setShowMenu(true)} 
                    className='w-6 md:hidden cursor-pointer' 
                    src={assets.menu_icon} 
                    alt="Menu" 
                />
            </div>

            {/* Mobile Menu */}
            <div className={`${showMenu ? "fixed w-full h-full bg-white top-0 right-0 z-20" : "hidden"} md:hidden`}>
                <div className='flex items-center justify-between px-5 py-6'>
                    <div onClick={() => navigate("/")} className='logo text-2xl text-blue-600 font-bold cursor-pointer'>
                        <span>Care</span><strong>Buddy</strong>
                    </div>
                    <img 
                        onClick={() => setShowMenu(false)} 
                        className='w-7 cursor-pointer' 
                        src={assets.cross_icon} 
                        alt="Close" 
                    />
                </div>
                <ul className='flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium'>
                    <NavLink onClick={() => setShowMenu(false)} to='/'>
                        <li className='px-4 py-2 rounded'>HOME</li>
                    </NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to='/doctors'>
                        <li className='px-4 py-2 rounded'>ALL DOCTORS</li>
                    </NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to='/about'>
                        <li className='px-4 py-2 rounded'>ABOUT</li>
                    </NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to='/contact'>
                        <li className='px-4 py-2 rounded'>CONTACT</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
