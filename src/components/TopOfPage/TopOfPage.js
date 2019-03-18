import React from 'react'
import { Link } from 'gatsby';
import logo from './../../../static/img/apex-centre-logo.png';
import './TopOfPage.scss'

const TopOfPage = () => (
    <div className='top-of-page__container'>
        <Link to='/'>
            <img className='top-of-page__img' src={logo} alt="Logo of Apex Centre site" />
        </Link>
        <div className='top-of-page__icons'>
            <a target="_blank" href='https://www.facebook.com/apexcentreinfo/'><i class="fab fa-facebook top-of-page__icon"></i></a>
            <a target="_blank" href='https://twitter.com/centre_apex/'><i class="fab fa-twitter-square top-of-page__icon"></i></a>
        </div>

    </div>
)

export default TopOfPage;