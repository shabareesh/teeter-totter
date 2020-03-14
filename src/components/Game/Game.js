import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeightsController from "../WeightsController/WeightsController";
import Teeter from "../Teeter/Teeter";
import './game.scss';
import { generateRandomShape, generateRandomValue } from "../../utils/utils";
import { setGameConfig, setLeftWeightLeftPosition, setLeftWeightTopPosition } from "./gameAction";

const Game = () => {
    const dispatch = useDispatch();

    const [started, setStarted] = React.useState(false);
    const [paused, setPaused] = React.useState(false);
    const [bend, setBend] = React.useState(0);

    let interval;

    const {
        rightWeight,
        leftWeight,
        leftWeightTopPosition,
        leftWeightLeftPosition,
        barOffset
    } = useSelector(state => state.gameConfig);

    const onGameStart = () => {
        dispatch(setGameConfig({
            rightWeightLeftPosition: generateRandomValue() * 10,
            rightWeightShape: generateRandomShape(),
            rightWeight: generateRandomValue(),
            leftWeight: generateRandomValue(),
            leftWeightTopPosition: 0,
            leftWeightLeftPosition: generateRandomValue() * 10,
            leftWeightShape: generateRandomShape(),
            barOffset: document.getElementById('bar').offsetTop,
        }));

        setStarted(true);
        setBend(3);
    };

    const onPause = () => {
        setPaused(!paused);
    };

    const onStop = () => {
        setStarted(false);
    };

    const getShapeHeight = () => {
        return document.querySelector('#left-weight').clientHeight;
    };

    const calculateBend = () => {
        const diff = leftWeight / rightWeight;

        if (diff > 1) {
            return -(diff * 3);
        } else if (diff === 1){
            return 0;
        } else {
            return diff * 3;
        }
    };

    const onKeyPress = (e) => {
      if (started) {
          if (e.key === 'ArrowRight') {
              dispatch(setLeftWeightLeftPosition(leftWeightLeftPosition + 10))
          } else if (e.key === 'ArrowLeft') {
              dispatch(setLeftWeightLeftPosition(leftWeightLeftPosition - 10))
          }
      }
    };

    React.useEffect(() => {
        if (started && !paused) {
            if (leftWeightTopPosition < barOffset - getShapeHeight() - 30) {
                interval = setInterval(() => {
                    dispatch(setLeftWeightTopPosition(leftWeightTopPosition + 10));
                }, 500);
            } else {
                setBend(calculateBend());
                setStarted(false);
            }
        }

        document.addEventListener('keydown', onKeyPress);

        return () => {
            clearInterval(interval);
            document.removeEventListener('keydown', onKeyPress);
        };
    });

    return (
        <div className="game">
            <div className="game--controls">
                {!started && <button onClick={onGameStart}>Start</button>}
                {started && (
                    <>
                        <button onClick={onPause}>{paused ? 'Continue' : 'Pause'}</button>
                        <button onClick={onStop}>Stop</button>
                    </>
                )}
            </div>
            <WeightsController />
            <Teeter bend={bend} />
        </div>
    )
};

export default Game;
;
