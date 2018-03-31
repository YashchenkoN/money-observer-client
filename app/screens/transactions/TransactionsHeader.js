import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import appStyles from "../../styles/Styles";
import styles from "./TransactionsHeaderStyles";
import DrawerButton from "../../components/DrawerButton";
import HeaderIcon from "../../components/HeaderIcon";

const TransactionsHeader = (props) => {
    const {
        navigation,
        isChartShown,
        onToggleChart
    } = props;

    return (
        <View style={[styles.rootStyle, appStyles.headerStyle]}>
            <DrawerButton navigation={navigation}/>
            <HeaderIcon
                name={isChartShown ? 'format-list-bulleted' : 'chart-arc'}
                onPress={onToggleChart}
            />
        </View>
    );
};

TransactionsHeader.propTypes = {
    navigation: PropTypes.object.isRequired,
    isChartShown: PropTypes.bool,
    onToggleChart: PropTypes.func
};

export default TransactionsHeader;
