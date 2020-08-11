import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import store from './redux/store'
import Modal from 'react-modal'

import { Bootstrap } from './config/bootstrap'

Bootstrap()

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
    Modal.setAppElement('#root')
);