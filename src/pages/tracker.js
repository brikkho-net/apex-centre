import React, { Component } from 'react';

import SearchProfile from '../components/Tracker/SearchProfile';
import Layout from '../components/Layout/Layout';
import Aux from './../hoc/Aux'
import { Helmet } from 'react-helmet';

class Tracker extends Component{
    state = {
        error: null
    }
    componentDidMount() {
        const { search } = this.props.location;
        const error = search.match(/err=([^&]*)/);
        if(error) {
            this.setState({error: error[1].split('_').join(' ')})
        }
    }
    render(){
        return(
            <Aux>
                <Helmet>
                    <title>Apex Legends Tracker - Check Your Stats!</title>
                    <meta name="description" content='Check your Apex Legends stats now! Watch as you progress with the best tracker'/>
                    <meta name='keywords' content='apex, legends, tracker, stats, player' />
                    <meta name="og:title" content='Apex Centre - Check Your Stats!'/>
                    <meta property="og:image" content="https://pbs.twimg.com/media/DzP4GgXUUAAWi8Q.jpg:large"/>
                    <link rel="canonical" href="https://www.apex-centre.com/tracker/"/>

                </Helmet>
                <Layout>
                    {/* <SearchProfile navigate={this.props.navigate} err={this.state.error}/> */}
                    <p className='error-message'>Looks like something is wrong with our API. We will try to fix it as soon as possible. Sorry!</p>
                </Layout>
            </Aux>
        )
    }

}

export default Tracker;