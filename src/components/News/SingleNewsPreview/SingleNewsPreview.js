import React from 'react';
import { Link } from "gatsby";
import Img from "gatsby-image";
import './SingleNewsPreview.scss'


const SingleNewsPreview = (props) => (
        <Link to={props.path}>
            <section className='single-news-preview__container'>
                <div className='single-news-preview__img'>
                    <Img style={{height: '100%'}} fluid={props.image} alt="Apex Legends News Image" />
                </div>
                <div className='single-news-preview__date'>{props.date}</div>
                <div className='single-news-preview__button-container'>
                    <button className='single-news-preview__button'>Read More</button>
                </div>         
                <div className='single-news-preview__info'>
                    <h3 className='single-news-preview__heading'>{props.title}</h3>
                    <p className='single-news-preview__description'>{props.description}</p>
                </div>

            </section>
        </Link>
)

export default SingleNewsPreview;