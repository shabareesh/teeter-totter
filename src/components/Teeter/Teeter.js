import React from 'react';
import './teeter.scss';

const Teeter = ({ bend }) => {
    return (
        <div className="teeter-container">
            <div className="bar" id="bar" style={{transform: `skewY(${bend}deg)`}} />
            <div className="balancer" />
        </div>
    );
};

export default Teeter;
