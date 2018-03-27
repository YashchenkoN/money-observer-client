import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {connect, Provider} from "react-redux";
import store from './app/redux/Index'
import RegistrationForm from "./app/components/RegistrationForm";

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    {this.props.isLoggedIn ? <Text>Hello</Text> : <RegistrationForm/>}
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f',
        paddingLeft: 60,
        paddingRight: 60
    },
});

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
};

connect(mapStateToProps)(App);