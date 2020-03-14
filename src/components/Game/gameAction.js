import {
    SET_GAME_CONFIG,
    SET_RIGHT_WEIGHT_LEFT_POSITION,
    SET_RIGHT_WEIGHT,
    SET_RIGHT_WEIGHT_SHAPE,
    SET_LEFT_WEIGHT,
    SET_LEFT_WEIGHT_LEFT_POSITION,
    SET_LEFT_WEIGHT_SHAPE,
    SET_LEFT_WEIGHT_TOP_POSITION,
} from "./gameConstants";

export const setGameConfig = (data) => ({
    type: SET_GAME_CONFIG,
    data,
});

export const setRightWeightLeftPosition = (data) => ({
   type: SET_RIGHT_WEIGHT_LEFT_POSITION,
   data,
});

export const setRightWeight = (data) => ({
    type: SET_RIGHT_WEIGHT,
    data,
});

export const setRightWeightShape = (data) => ({
    type: SET_RIGHT_WEIGHT_SHAPE,
    data,
});

export const setLeftWeightLeftPosition = (data) => ({
    type: SET_LEFT_WEIGHT_LEFT_POSITION,
    data,
});

export const setLeftWeightTopPosition = (data) => ({
    type: SET_LEFT_WEIGHT_TOP_POSITION,
    data,
});

export const setLeftWeight = (data) => ({
    type: SET_LEFT_WEIGHT,
    data,
});

export const setLeftWeightShape = (data) => ({
    type: SET_LEFT_WEIGHT_SHAPE,
    data,
});
