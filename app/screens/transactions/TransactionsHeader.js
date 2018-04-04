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
        onRefresh,
        token,
        isLoading
    } = props;

    return (
        <View style={[styles.rootStyle, appStyles.headerStyle]}>
            <DrawerButton navigation={navigation}/>
            <HeaderIcon
                name={'refresh'}
                onPress={() => {
                    if (!isLoading) {
                        onRefresh(token)
                    }
                }}
            />
        </View>
    );
};

TransactionsHeader.propTypes = {
    navigation: PropTypes.object.isRequired,
    onRefresh: PropTypes.func,
    token: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default TransactionsHeader;
