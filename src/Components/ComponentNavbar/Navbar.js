import React, { useState } from 'react';
import logo from '../../assets/logo.jpg';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <img src={logo} alt="Logo" width="80px" height="80px" />

            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={`nav-bar-menu ${isOpen ? 'open' : ''}`}>
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#about" onClick={toggleMenu}>About me</a></li>
                <li><a href="#education" onClick={toggleMenu}>Education</a></li>
                 <li><a href="#skills" onClick={toggleMenu}>Technical skills</a></li>
                <li><a href="#projects" onClick={toggleMenu}>My Projects</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact me</a></li>
            </ul>

            <a href="#contact" className="navbar-connect">Connect with Me</a>
        </div>
    );
}

export default Navbar;
