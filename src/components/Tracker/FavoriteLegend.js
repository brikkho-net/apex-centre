import React from 'react';
import './../../pages/tracker.scss'

const FavoriteLegend = ({
    image
}) => (
    <div className='favorite-legend-container'>
        <div className='account-overview-heading-container'>
            <h3 className='account-stats-heading'>Favorite Legend</h3>
        </div>

        <div className='favorite-legend'>

            <div className='favorite-legend-img-container'>
                <img className='favorite-legend-img' src={image} alt=""/>
            </div>

        </div>

    </div>
);

export default FavoriteLegend;