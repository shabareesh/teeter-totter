import {
    SET_RIGHT_WEIGHT_LEFT_POSITION,
    SET_RIGHT_WEIGHT,
    SET_RIGHT_WEIGHT_SHAPE,
    SET_LEFT_WEIGHT,
    SET_LEFT_WEIGHT_LEFT_POSITION,
    SET_LEFT_WEIGHT_SHAPE,
    SET_LEFT_WEIGHT_TOP_POSITION, SET_GAME_CONFIG,
} from "./gameConstants";

const gameReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_GAME_CONFIG:
            return {
                ...state,
                ...action.data,
            };
        case SET_RIGHT_WEIGHT_LEFT_POSITION:
            return {
                ...state,
                rightWeighLeftPosition: action.data,
            };
        case SET_RIGHT_WEIGHT:
            return {
                ...state,
                rightWeight: action.data,
            };
        case SET_RIGHT_WEIGHT_SHAPE:
            return {
                ...state,
                rightWeightShape: action.data,
            };
        case SET_LEFT_WEIGHT:
            return {
                ...state,
                leftWeight: action.data,
            };
        case SET_LEFT_WEIGHT_LEFT_POSITION:
            return {
                ...state,
                leftWeightLeftPosition: action.data,
            };
        case SET_LEFT_WEIGHT_SHAPE:
            return {
                ...state,
                leftWeightShape: action.data,
            };
        case SET_LEFT_WEIGHT_TOP_POSITION:
            return {
                ...state,
                leftWeightTopPosition: action.data,
            };
        default:
            return state;
    }
};

export default gameReducer;
