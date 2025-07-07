import { CircleUser, Menu } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import MenuBar from './MenuBar';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  <>
    <div className='navbar'>
      <div className="logo1">
        Inventora
      </div>
      <div className="right-side">
        <div className="menu">
          <Menu onClick={toggleMenu} size={30} />
        </div>
        <div className="user-circle">
          <CircleUser size={30} onClick={()=>navigate('/profile')} />
        </div>
      </div>
    </div>

    <MenuBar isOpen={isOpen} onClose={toggleMenu} />
  </>
);
}
export default Navbar;