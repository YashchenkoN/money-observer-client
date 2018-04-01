import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import DrawerButton from "../components/DrawerButton";

const DashboardScreen = ({navigation}) => (
    <View>

    </View>
);

DashboardScreen.propTypes = {
    navigation: PropTypes.object,
};

DashboardScreen.navigationOptions = ({navigation}) => ({
    title: 'Dashboard',
    headerLeft: <DrawerButton navigation={navigation}/>
});

export default DashboardScreen;
