/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import '../styles/NavBar.scss';
import Carrito from "./itemCart";
const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="title">
                <h1><a href="#">MusicKS</a></h1>
            </div>
            <ul className="navBar__list">
                <li className="list__item"><a href="#" className="list__button">INICIO</a></li>
                <li className="list__item"><a href="#" className="list__button">PRODUCTOS</a></li>
                <li className="list__item"><a href="#" className="list__button">MARCAS</a></li>
                <Carrito />
            </ul>
        </nav>

    )
}

export default NavBar;