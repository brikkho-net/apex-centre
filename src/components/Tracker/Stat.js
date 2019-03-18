import React from 'react';
import './../../pages/tracker.scss'

const Stat = ({
    amount,
    name,
    account
}) => (
    <div className={account ? 'account-overview-single-stat' : 'champion-single-stat'}>
        <div className={account ? null : 'champion-stat-amount-container'}>
            <p className={account ? 'account-overview-stat-amount' : 'single-champion-stat-amount account-overview-stat-amount'}>{amount}</p>
        </div>
        <div className='spacer'></div>
        <div className={account ? null : 'champion-stat-desc-container'}>
            <p className={account ? 'account-overview-stat-desc' : 'single-champion-stat-desc account-overview-stat-desc'}>{name}</p>
        </div>
    </div>
);

export default Stat;