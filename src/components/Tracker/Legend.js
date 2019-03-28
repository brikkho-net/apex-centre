import React from "react";
import './../../pages/tracker.scss'

import Stat from './Stat';

const Legend = ({
    name,
    image,
    stats
}) => {
    const keys = Object.keys(stats)
    const singleStats = []
    for(let key of keys) {
        if(stats[key] === '0') {
            continue;
        }
        singleStats.push(<Stat 
            key={key}
            amount={stats[key]}
            name={key.split('_').join(' ')}
        />)
    }
    return (
        <div className="single-champion-container">

        <div className="single-champion-name">
            <h3 className="account-stats-heading">
                {name}
            </h3>
        </div>

        <div className="single-champion-stats">

            <div className="single-champion-image-container">
                <img
                    className="single-champion-image"
                    src={image}
                    alt=""
                />
            </div>

            <div className="all-champion-stats">
                {singleStats}
                <div>
                    
                </div>
            </div>

        </div>

    </div>
    )

};

export default Legend;
