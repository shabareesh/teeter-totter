import {
    SET_GAME_CONFIG,
    SET_LEFT_WEIGHT_LEFT_POSITION,
    SET_LEFT_WEIGHT_TOP_POSITION,
} from "./gameConstants";

const gameReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_GAME_CONFIG:
            return {
                ...state,
                ...action.data,
            };
        case SET_LEFT_WEIGHT_LEFT_POSITION:
            return {
                ...state,
                leftWeightLeftPosition: action.data,
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
