import React from 'react';
import './Footer.scss'
import { Link } from "gatsby";

const Footer = () => (
    <footer className='footer'>
        <p> © 2019 Apex Centre. Apex Legends is a registered trademark of EA. All images belong to Respawn Entertainment.</p>
        <p className='footer__link'>Check your Apex Legends stats with our tracker <Link to='/tracker'>here</Link>!</p>
    </footer>
)

export default Footer;