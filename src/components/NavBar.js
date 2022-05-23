/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Carrito from "./itemCart";
import logo from '../img/logo.png';
const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="title">
                <h1><a href="#"> <img src={logo} /></a></h1>
            </div>

            {/* <form className="buscador">
                <button type="submit" className="material-icons-outlined">search</button>
                <input type="search" placeholder="Buscar producto.." required></input>
            </form> */}
            <div className="list">
                <ul className="navBar__list">
                    <li className="list__item"><a href="#" className="list__button">INICIO</a></li>
                    <li className="list__item"><a href="#" className="list__button">PRODUCTOS</a></li>
                    <li className="list__item"><a href="#" className="list__button">MARCAS</a></li>
                    <Carrito />
                </ul>
            </div>
        </nav>

    )
}

export default NavBar;