import React, { Component } from 'react';
import axios from 'axios';

import './tracker.scss';

//components
import Layout from '../components/Layout/Layout';
import Spinner from './../../src/components/UI/Spinner/Spinner';
import BasicInfo from '../components/Tracker/BasicInfo';
import Stat from '../components/Tracker/Stat';
import FavoriteLegend from '../components/Tracker/FavoriteLegend';
import Legend from '../components/Tracker/Legend';

//images
import img from './img.png';
import bloodhound from './../../static/img/tracker/Bloodhound.png';
import bangalore from './../../static/img/tracker/Bangalore.png';
import caustic from './../../static/img/tracker/Caustic.png';
import lifeline from './../../static/img/tracker/Lifeline.png';
import mirage from './../../static/img/tracker/Mirage.png';
import pathfinder from './../../static/img/tracker/Pathfinder.png';
import wraith from './../../static/img/tracker/Wraith.png';

class Profile extends Component {

    state = {
        loading: false,
        showStats: false,
        stats: null,
        username: '',
        overallStats: {},
        platform: 'pc',
        err: null,
    }

    componentDidMount(){
        const { search } = this.props.location;
        const username = search.match(/username=([^&]*)/);
        const platform = search.match(/platform=([^&]*)/);
        this.setState({
            username: username[1],
            platform: platform[1]
        }, () => {
            this.onSearchUser();
        })

    }

    onSearchUser = () => {
        this.setState({loading: true})
        //https://my-apex-api.herokuapp.com/
        axios.post(`https://my-apex-api.openode.io/`, {
            platform: this.state.platform,
            username: this.state.username,
            authorization: 'ePSizO14kE5h9e7xWwHeZdIqIvzW4MG4oCMeM3Uy1Lc'
        }).then(res => {
            let overallStats = this.state.overallStats;
            let allKills = 0;
            let killArray = [];
            res.data.legends.forEach(legend => {
                legend.stats.forEach(stat => {
                    if(stat.kills) {
                        allKills += parseInt(stat.kills)
                        killArray.push(parseInt(stat.kills))
                    }
                })
            })
            overallStats.allKills = allKills;

            // Finding Legend with most kills
            let mostKills = Math.max.apply(null, killArray)
            res.data.legends.forEach(legend => {
                legend.stats.forEach(stat => {
                    if(stat.kills) {
                        if(stat.kills === mostKills) {
                            overallStats.favoriteLegend = this.onCheckImage(legend.name)
                        }
                    }
                })
            })

            this.setState({showStats: true, loading: false, stats: res.data, overallStats: overallStats, err: null})
        })
        .catch(e => {
            if(e.response) {
                this.setState({err: e.response.data.error.message})
            } else {
                this.setState({err: 'Network Error. Try again later'})
            }

        })
    }

    onChangeUsername = (e) => {
        this.setState({username: e.target.value})
    }

    onCheckImage = (legend) => {
        switch(legend) {
            case 'bangalore':
                return bangalore
            case 'bloodhound':
                return bloodhound
            case 'caustic':
                return caustic
            case 'lifeline':
                return lifeline
            case 'mirage':
                return mirage
            case 'pathfinder':
                return pathfinder
            case 'wraith':
                return wraith
            default:
                return bloodhound
        }
    }

    render() { 
        if(!this.state.showStats) {
            if(this.state.err) {
                this.props.navigate(`/tracker?err=${this.state.err.split(' ').join('_')}`)

                return (
                    <div></div>
                )


            } else {
                return (
                    <Layout>
                        <main className='account__loading-container'><Spinner /></main>
                    </Layout>
                )
            }

            
        }

        return (
            <Layout>
                <main className='tracking-container'>

                <BasicInfo 
                    avatar={img}
                    username={this.state.username[0].toUpperCase() + this.state.username.slice(1)}
                    platform={this.state.platform}
                />

                <div className='account-all-stats'>

                <div className='account-important-info'>
                        <div className='account-overview'>
                        
                            <div className='account-overview-heading-container'>
                                <h3 className='account-stats-heading'>Overview</h3>
                            </div>
                            
                            <div className='account-overview-stats'>

                                <Stat name="Level" amount={this.state.stats.level} account />
                                <Stat name="Kills" amount={this.state.overallStats.allKills} account />

                            </div>

                        </div>

                        <FavoriteLegend image={this.state.overallStats.favoriteLegend} />

                    </div>
                    
                    <div className='champions-container'>
                        {this.state.stats.legends.map(legend => (
                            <Legend
                                key={legend.name}
                                name={legend.name[0].toUpperCase() + legend.name.slice(1)}
                                image={this.onCheckImage(legend.name.toLowerCase())}
                                stats={legend.stats}
                            />
                        ))}
                    </div>

                    
                </div>
                </main>
            </Layout>
        )
    
    }

    

}

export default Profile;