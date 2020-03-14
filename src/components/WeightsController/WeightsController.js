import React from 'react';
import { useSelector } from 'react-redux'
import Weights from "../Weights/Weights";
import './weightsController.scss';

const WeightsController = () => {
    const {
        rightWeightLeftPosition,
        rightWeight,
        rightWeightShape,
        leftWeight,
        leftWeightShape,
        leftWeightTopPosition,
        leftWeightLeftPosition,
    } = useSelector(state => state.gameConfig);

    return (
        <div className="weights-controller">
            {leftWeight && (
                <div className="weights-controller--left">
                    <Weights
                        weight={leftWeight}
                        type={leftWeightShape}
                        left={leftWeightLeftPosition}
                        top={leftWeightTopPosition}
                        id="left-weight"
                    />
                </div>
            )}
            {rightWeight && (
                <div className="weights-controller--right">
                    <Weights
                        weight={rightWeight}
                        type={rightWeightShape}
                        isRight
                        left={rightWeightLeftPosition}
                        id="right-weight"
                    />
                </div>
            )}
        </div>
    );
};

export default WeightsController;
