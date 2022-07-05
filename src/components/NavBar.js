import React from "react";
import CartWidget from "./cartWidget";
import logo from '../img/logo.png';
import { Link, NavLink } from "react-router-dom";



const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="title">
                <Link to='/'>
                    <h1><img src={logo} alt='logo' /></h1>
                </Link>
            </div>

            <div className="list">
                <NavLink to='/lespaul' className={({ isActive }) => isActive ? 'buttonLinkOff' : 'buttonLink'}>Les Paul</NavLink>
                <NavLink to='/acustic' className={({ isActive }) => isActive ? 'buttonLinkOff' : 'buttonLink'}>Acustic</NavLink>
                <NavLink to='/bass' className={({ isActive }) => isActive ? 'buttonLinkOff' : 'buttonLink'}>Bass</NavLink>
                <NavLink to='/designer' className={({ isActive }) => isActive ? 'buttonLinkOff' : 'buttonLink'}>Designer</NavLink>
                <CartWidget />
            </div>
        </nav>

    )
}

export default NavBar;