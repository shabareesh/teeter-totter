import { combineReducers } from 'redux';
import gameReducer from "./components/Game/gameReducer";

export default combineReducers({
    gameConfig: gameReducer,
});
