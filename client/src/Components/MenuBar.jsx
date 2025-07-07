import React from 'react';
import { XIcon, Home, ShoppingBag, User, Search, Heart, ShoppingCart, Phone, Mail, MapPin, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const MenuBar = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const handleclick = async ()=>{
        localStorage.removeItem("token");
        navigate("/landing");
        toast.success("Logout was Successful")
    }

  return (
    <div className={`menu-overlay ${isOpen ? 'menu-open' : ''}`}>
      <div className="menu-container">
        <div className="menu-header">
          <div className="menu-logo">
            Inverntora
          </div>
          <button className="close-btn" onClick={onClose}>
            <XIcon size={24} />
          </button>
        </div>
        
        <div className="menu-content">
          <nav className="menu-nav">
            <ul className="menu-items">
              <li className="menu-item">
                <a href="/" className="menu-link">
                  <Home size={20} />
                  <span>Home</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="/products" className="menu-link">
                  <ShoppingBag size={20} />
                  <span>Products</span>
                </a>
              </li>

              <li className="menu-item">
                <a href="/liked" className="menu-link">
                  <Heart size={20} />
                  <span>Wishlist</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="/cart" className="menu-link">
                  <ShoppingCart size={20} />
                  <span>Cart</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="/profile" className="menu-link">
                  <User size={20} />
                  <span>My Account</span>
                </a>
              </li>
              <li className='menu-item' onClick={handleclick}>
                <p className='menu-link'>
                    <LogOut  />
                    <span>Logout</span>
                </p>
              </li>
            </ul>
          </nav>

          <div className="menu-categories">
            <h3 className="categories-title">Categories</h3>
            <ul className="categories-list">
              <li><a href="#electronics">Electronics</a></li>
              <li><a href="#clothing">Clothing</a></li>
              <li><a href="#home-garden">Home & Garden</a></li>
              <li><a href="#sports">Sports</a></li>
              <li><a href="#books">Books</a></li>
              <li><a href="#beauty">Beauty</a></li>
            </ul>
          </div>

          <div className="menu-contact">
            <h3 className="contact-title">Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 7087550589</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>gangasingh1734@gmail.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>123, Nigaa's Land</span>
              </div>
            </div>
          </div>
        </div>

        <div className="menu-footer">
          <div className="social-links">
            <a href="#facebook" className="social-link">GitHub</a>
            <a href="#twitter" className="social-link">Twitter</a>
            <a href="#instagram" className="social-link">Instagram</a>
          </div>
          <p className="copyright">© 2024 Inverntora. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;