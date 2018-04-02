import React, {PropTypes} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import styles from "./styles/Styles";
import {isLoggedIn} from "./utils/isLoggedIn";
import NavigatorContainer from "./navigators/NavigatorContainer";
import {AuthNavigator} from "./navigators/AuthNavigator";

const App = (props) => {
    const {
        token,
        expiration
    } = props;

    return (
        <View style={styles.rootStyle}>
            {
                isLoggedIn(token, expiration) ? <NavigatorContainer/> : <AuthNavigator/>
            }
        </View>
    )
};

App.propTypes = {
    token: PropTypes.string,
    expiration: PropTypes.string
};

export default connect(
    (state) => {
        return {
            token: state.token,
            expiration: state.expiration
        }
    }
)(App)