import React from 'react'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footerContainer'>
                    <div className='redesContainer'>
                        <a href='https://www.facebook.com' target='blank'><img src='https://cdn-icons-png.flaticon.com/512/20/20673.png' alt='facebook-logo'/></a>
                        <a href='https://www.instagram.com/leo.diaz999/' target='blank'><img src='https://www.stanthonyshs.org/wp-content/uploads/2018/01/instagram-logo-black-transparent.png' alt='logo-Instagram'/></a>
                        <img src='https://www.nicepng.com/png/full/90-902871_facebook-silhouette-icon-at-getdrawings-logo-de-whatsapp.png' alt='logo-WhatsApp'/>
                    </div>
                    <div className='logoContainer'>
                    <Link to='/'><img src={logo} alt='logo' /></Link>
                    </div>
                    <div className='categoryContainer'>
                        <Link to='/lespaul'>LesPaul</Link>
                        <Link to='/acustic'>acustic</Link>
                        <Link to='/bass'>bass</Link>
                        <Link to='/designer'>designer</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer