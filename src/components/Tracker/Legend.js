import React from "react";
import './../../pages/tracker.scss'

import Stat from './Stat';

const Legend = ({
    name,
    image,
    stats
}) => (
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
                {stats.map(stat => (
                    <Stat
                        key={Object.keys(stat)[0]}
                        amount={stat[Object.keys(stat)[0]]}
                        name={Object.keys(stat)[0].split("_").join(" ").toUpperCase()}
                    />
                ))}
            </div>

        </div>

    </div>
);

export default Legend;
