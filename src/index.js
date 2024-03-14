import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { GoogleOAuthProvider } from '@react-oauth/google';

import reducers from './reducers'
import './index.css';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
                        
        {/* <GoogleOAuthProvider clientId = "510303594612-m6rmt7pqgjf4q3db1kri68i37r1afd7e.apps.googleusercontent.com" > */}
        <App/>   
        {/* </GoogleOAuthProvider> */}
    </Provider>,
    document.getElementById('root'));