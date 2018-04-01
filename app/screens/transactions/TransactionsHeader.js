import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import appStyles from "../../styles/Styles";
import styles from "./TransactionsHeaderStyles";
import DrawerButton from "../../components/DrawerButton";
import HeaderIcon from "../../components/HeaderIcon";

const TransactionsHeader = (props) => {
    const {
        navigation,
        onRefresh
    } = props;

    return (
        <View style={[styles.rootStyle, appStyles.headerStyle]}>
            <DrawerButton navigation={navigation}/>
            <HeaderIcon
                name={'refresh'}
                onPress={onRefresh}
            />
        </View>
    );
};

TransactionsHeader.propTypes = {
    navigation: PropTypes.object.isRequired,
    isChartShown: PropTypes.bool,
    onRefresh: PropTypes.func
};

export default TransactionsHeader;
