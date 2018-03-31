import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import styles from "../styles/Styles"
import colors from "../styles/Colors";
import DrawerButton from "../components/DrawerButton";
import Card from "../components/Card";

const Settings = ({navigation}) => (
    <View>
        <Card wrapperStyle={styles.rowStyle}>
            <Text style={{color: colors.secondaryText}}>Made by YashchenkoN</Text>
        </Card>
    </View>
);

Settings.propTypes = {
    navigation: PropTypes.object,
};

Settings.navigationOptions = ({navigation}) => ({
    title: 'Settings',
    headerLeft: <DrawerButton navigation={navigation}/>
});

export default Settings;
