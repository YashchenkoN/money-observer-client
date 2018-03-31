import React from 'react';

import {Provider} from "react-redux";
import store from './app/redux/Index'
import {AuthNavigator} from "./app/navigators/AuthNavigator";
import styles from "./app/styles/Styles";
import NavigatorContainer from "./app/navigators/NavigatorContainer";
import {View} from "react-native";

export default class App extends React.Component {

    render() {
        return (
            <View style={styles.rootStyle}>
                <Provider store={store}>
                    {/*{this.props.isLoggedIn ? <NavigatorContainer/> : <AuthNavigator/>}*/}
                    {<NavigatorContainer/>}
                </Provider>
            </View>
        )
    }
}