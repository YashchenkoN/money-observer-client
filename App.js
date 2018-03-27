import React from 'react';
import {Text} from 'react-native';

import {connect, Provider} from "react-redux";
import store from './app/redux/Index'
import {AuthNavigator} from "./app/config/AuthNavigator";

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                {this.props.isLoggedIn ? <Text>Hello</Text> : <AuthNavigator/>}
            </Provider>
        )
    }
}