import React from 'react'
import { Link } from 'gatsby';
import logo from './../../../static/img/apex-centre-logo.png';
import './TopOfPage.scss'

const TopOfPage = () => (
    <div className='top-of-page__container'>
        <Link to='/'>
            <img className='top-of-page__img' src={logo} alt="Logo of Apex Centre site" />
        </Link>

    </div>
)

export default TopOfPage;