import React from 'react';
import Nav from './../Nav/Nav'
import { Helmet } from 'react-helmet'
import Footer from './../Footer/Footer'
import './Layout.scss'
import Popup from './../Popup/Popup'

const Layout = (props) => {

    return(
        <div>
        <Helmet>
            <meta name="subject" content="Apex Legends" />
            <meta name="robots" content="index, follow" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
        </Helmet>
        <Nav />
        {props.children}
        <Popup />
        <Footer />

    </div>
    )

}

export default Layout;