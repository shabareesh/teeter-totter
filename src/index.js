import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux';

import reducer from "./reducer";
import Game from "./components/Game/Game";

import './index.scss';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root'),
);
