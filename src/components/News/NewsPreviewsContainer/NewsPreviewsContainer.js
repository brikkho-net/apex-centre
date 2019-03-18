import React from 'react';
import SingleNewsPreview from './../SingleNewsPreview/SingleNewsPreview'
import Button from './../../UI/Button/Button';
import { Link } from "gatsby";
import './NewsPreviewsContainer.scss'

const NewsPreviewsContainer = (props) => {
      let news = props.news.map(post => (
            <div key={post.node.id}>
                <SingleNewsPreview
                    title={post.node.frontmatter.title}
                    description={post.node.frontmatter.description}
                    image={post.node.frontmatter.image.childImageSharp.fluid}
                    date={post.node.frontmatter.date}
                    path={post.node.frontmatter.path}
                />
            </div>
        ))

    return (
        <main className='news-previews__container'>
            <div className='news-previews__heading-container'>
                <div className='news-previews__line'></div>
                <h2 className='news-previews__heading'>RECENT NEWS</h2>
                <div className='news-previews__line'></div>
            </div>
            <div className='news-previews__all'>
                {news}
            </div>
            <div className='news-previews__btn-container'>
                <Link to='/all/news'><Button>More News</Button></Link>
            </div>

    </main>
    )

}


export default NewsPreviewsContainer