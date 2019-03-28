import React, { Component} from 'react';
import './../../pages/tracker.scss'

import { Link } from 'gatsby'

class SearchProfile extends Component{

    state = {
        username: '',
        platform: 'PC'
    }

    inputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onLinkChange = (e) => {
        e.preventDefault()
        this.props.navigate(`/profile?username=${this.state.username}&platform=${this.state.platform}`)
    }

    onPlatformChange = (e, platform) => {
        if(this.state.platform !== platform) {
            this.setState({platform: platform})
        }
    }

    render(){
        return(
            <main className="search">
        
                <form className='search__form' onSubmit={this.onLinkChange}>
        
                    <h1 className="search__title">Search For Your Apex Stats</h1>
        
                    <div className='search__group'>

                        <input placeholder='Your Username...' type="text" name="username" value={this.state.username} onChange={this.inputChange} />
                        <i style={{color: this.state.platform === 'PC' ? '#326f99' : '#fff'}}
                            onClick={(e) => this.onPlatformChange(e, 'PC')}
                            className="fab fa-windows windows-icon search__icon">
                        </i>
                        <i style={{color: this.state.platform === 'X1' ? '#326f99' : '#fff'}} 
                            onClick={(e) => this.onPlatformChange(e, 'X1')}
                            className="fab fa-xbox xbox-icon search__icon">
                        </i>
                        <i style={{color: this.state.platform === 'PS4' ? '#326f99' : '#fff'}}
                            onClick={(e) => this.onPlatformChange(e, 'PS4')}
                            className="fab fa-playstation ps-icon search__icon">
                        </i>

                        <Link to={`/profile?username=${this.state.username}&platform=${this.state.platform}`}>
                            <i className="fas fa-angle-right search__icon"></i>
                        </Link>

                    </div>
                    {this.props.err ? (
                            <div className='search__error'>{this.props.err}</div>
                        ) : null}
        
                </form>
        
            </main>
        )
    }
}

export default SearchProfile;