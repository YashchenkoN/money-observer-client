import React from 'react';

import {Provider} from "react-redux";
import store from './app/redux/Index'
import {AuthNavigator} from "./app/configs/AuthNavigator";
import {AccountNavigator} from "./app/configs/AccountNavigator";

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                {this.props.isLoggedIn ? <AccountNavigator/> : <AuthNavigator/>}
            </Provider>
        )
    }
}