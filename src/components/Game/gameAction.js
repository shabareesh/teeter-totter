import {
    SET_GAME_CONFIG,
    SET_LEFT_WEIGHT_LEFT_POSITION,
    SET_LEFT_WEIGHT_TOP_POSITION,
} from "./gameConstants";

export const setGameConfig = (data) => ({
    type: SET_GAME_CONFIG,
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
