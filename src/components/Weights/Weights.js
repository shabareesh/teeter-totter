import React from "react";
import './weights.scss';

const Weights = ({ id, type, weight, left = 0, top = 0, isRight = false }) => (
    <div
        className={`weights ${type}-${weight}`}
        id={id}
        style={{
            left: `${left}px`,
            top: isRight ? '100%' : `${top}px`,
            transform: isRight && 'translateY(-100%)',
        }}
    >
        {weight}kg
    </div>
);

export default Weights;
