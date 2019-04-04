import React from 'react';
import Nav from './../Nav/Nav'
import { Helmet } from 'react-helmet'
import Footer from './../Footer/Footer'
import './Layout.scss'
import Popup from './../Popup/Popup'
import icon from './../../../static/img/favicon.ico'

const Layout = (props) => {

    return(
        <div>
            <Helmet>
                <meta name="subject" content="Apex Legends" />
                <meta name="robots" content="index, follow" />
                <link rel="shortcut icon" type="image/x-icon" href={icon}/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />

                <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <script>
                (adsbygoogle = window.adsbygoogle || []).push({{
                    google_ad_client: "ca-pub-6859884578348905",
                    enable_page_level_ads: true
                }});
                </script>
            </Helmet>
            <Nav />
            {props.children}
            <Popup />
            <Footer />

        </div>
    )

}

export default Layout;