import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import App from './App';
import { Provider } from 'react-redux'; 
import { searchText } from './reducer';

const logger = createLogger();
 
const store = createStore(searchText, applyMiddleware(logger));


ReactDOM.render(<Provider store = {store}>
                    <App />
                </Provider>
                ,document.getElementById('root'));
serviceWorker.unregister();
