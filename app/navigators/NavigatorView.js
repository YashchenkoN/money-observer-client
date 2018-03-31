import React from 'react';
import PropTypes from 'prop-types';
import {addNavigationHelpers} from 'react-navigation';
import Navigator from './Navigator';
import Loader from "../components/Loader";

const NavigatorView = ({dispatch, navigator, isReady}) => (
    isReady ? (
        <Navigator navigation={addNavigationHelpers({dispatch, state: navigator})}/>
    ) : (
        <Loader isLoading={true}/>
    )
);

NavigatorView.propTypes = {
    dispatch: PropTypes.func,
    navigator: PropTypes.object,
    isReady: PropTypes.bool,
};

export default NavigatorView;
