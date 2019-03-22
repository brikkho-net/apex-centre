import React, { Component } from 'react';
import { Link } from "gatsby";
import Img from "gatsby-image"

import './header.scss';


class Header extends Component {

    state = {
        actualImage: 1,
        nextImage: null,
        beforeImage: null,
        transition: null,
        blocked: false,
        lineAnimation: 'timer-line__animated'
    }

    setImages(actualImage) {
        let nextImage;
        let beforeImage;

        if(actualImage === 0){
            actualImage = 3;
        }

        if(actualImage === 4){
            actualImage = 1;
        }

        nextImage = actualImage + 1;
        beforeImage = actualImage - 1;


        if(actualImage === 3){
            nextImage = 1
        }

        if(actualImage === 1){
            beforeImage = 3;
        }
        
        this.setState({ actualImage, nextImage, beforeImage });

    }

    componentDidMount(){
        this.setImages(this.state.actualImage);

        this.lineInterval = setInterval(() => {
            this.nextImage();
        }, 10000);
    }

    nextImage = () => {
        if(!this.state.blocked){
            this.resetInterval();
            this.setState(prevState => ({
                transition: prevState.actualImage
            }));

            this.setImages(this.state.actualImage + 1);
            this.blockForSecond();
        }
    }

    beforeImage = () => {
        if(!this.state.blocked){
            this.resetInterval();
            this.setState(prevState => ({
                transition: prevState.actualImage
            }));
            this.setImages(this.state.actualImage - 1);
            this.blockForSecond();
        }
    }

    blockForSecond(){
        this.setState({ blocked: true });
        this.blockTimeout = setTimeout(() => {
            this.setState({ blocked: false })
        }, 700)
    }

    resetInterval(){

        this.setState({lineAnimation: ''});
        setTimeout(() => this.setState({ lineAnimation: 'timer-line__animated'}), 80);

        clearInterval(this.lineInterval);
        this.lineInterval = setInterval(() => {
            this.nextImage();
        }, 10000);
    }

    componentWillUnmount(){
        clearInterval(this.lineInterval);
        clearTimeout(this.blockTimeout);
    }
    

    render() {

        const { nextImage, beforeImage, actualImage, transition } = this.state;
        let text = actualImage === 1 ? this.props.news1.title : actualImage === 2 ? this.props.news2.title : this.props.news3.title;
        let path = actualImage === 1 ? this.props.news1.path : actualImage === 2 ? this.props.news2.path : this.props.news3.path;

        return (
            <header className='header'>
                <div className={`header__container`}>

                    <div className={`header__img ${nextImage === 1 ? 'next' : ''}${beforeImage === 1 ? 'before' : ''}${actualImage === 1 ? 'actual' : ''} ${transition === 1 ? 'withTransition' : ''}`}>

                        <Img 
                            style={{height: '100%', objectFit: 'fill'}} 
                            fluid={this.props.news1.image.childImageSharp.fluid} 
                            alt='Apex Legends Main News'
                        />

                    </div>

                    <div className={`header__img ${nextImage === 2 ? 'next' : ''}${beforeImage === 2 ? 'before' : ''}${actualImage === 2 ? 'actual' : ''} ${transition === 2 ? 'withTransition' : ''}`}>

                        <Img 
                            style={{height: '100%', objectFit: 'fill'}} 
                            fluid={this.props.news2.image.childImageSharp.fluid} 
                            alt='Apex Legends Main News'
                        />
                        
                    </div>

                    <div className={`header__img ${nextImage === 3 ? 'next' : ''}${beforeImage === 3 ? 'before' : ''}${actualImage === 3 ? 'actual' : ''} ${transition === 3 ? 'withTransition' : ''}`}>

                        <Img 
                            style={{height: '100%', objectFit: 'fill'}} 
                            fluid={this.props.news3.image.childImageSharp.fluid} 
                            alt='Apex Legends Main News'
                        />
                        
                    </div>

                    <i onClick={this.nextImage} className="fas fa-angle-right icon icon-right"></i>
                    <i onClick={this.beforeImage} className="fas fa-angle-left icon icon-left"></i>
                        <div className='header__news'>
                            <Link to={path}>
                                <div className='header__news-container'>
                                    <h1 className="header__news-title">{text}</h1>
                                    <div></div>
                                </div>
                            </Link>
                        </div>
                    <div className={`timer-line ${this.state.lineAnimation}`}></div>
                </div>
            </header>
        )
    }

}

export default Header;