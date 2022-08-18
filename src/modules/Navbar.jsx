import React, { useState, useEffect } from 'react';

const logo_url = new URL('../media/header/logo.png', import.meta.url);

export default function Navbar({updateNavState, navstate}) {

    //Function for changing navstate when clicking any header link
    function swapTab({ target }) {
        updateNavState(target.innerText);
    }

    const [stickyClass, setStickyClass] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            // window height changed for the demo
            windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
    };

    return (
        <nav className={stickyClass}>
            <img src={logo_url} alt="Logo"/>
            <p {...navstate == "Home" && {id : "nav_active"}} onClick={swapTab} className="navbtn">Home</p>
            <p {...navstate == "Projects" && {id : "nav_active"}} onClick={swapTab} className="navbtn">Projects</p>
            <p {...navstate == "About" && {id : "nav_active"}} onClick={swapTab} className="navbtn">About</p>
            <p {...navstate == "Skills" && {id : "nav_active"}} onClick={swapTab} className="navbtn">Skills</p>
        </nav>
    )
}
