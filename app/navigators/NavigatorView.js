import React from 'react';
import PropTypes from 'prop-types';
import {addNavigationHelpers} from 'react-navigation';
import Navigator from './Navigator';
import {
    createReactNavigationReduxMiddleware,
    createReduxBoundAddListener
} from "react-navigation-redux-helpers";

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

const addListener = createReduxBoundAddListener("root");

const NavigatorView = ({dispatch, navigator}) => (
    <Navigator navigation={addNavigationHelpers({
        dispatch,
        state: navigator,
        addListener
    })}/>
);

NavigatorView.propTypes = {
    dispatch: PropTypes.func,
    navigator: PropTypes.object
};

export default NavigatorView;
