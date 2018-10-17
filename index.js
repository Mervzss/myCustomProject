import React from "react";
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux'
import App from './App';
import configuration from './ReduxFiles/configuration'
const store = configuration()
const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);


AppRegistry.registerComponent('myFirstProject', () => RNRedux);
