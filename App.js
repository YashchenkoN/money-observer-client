import React from 'react';

import {Provider} from "react-redux";
import store from './app/redux/Index'
import AppJs from './app/App'

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <AppJs/>
            </Provider>
        )
    }
}