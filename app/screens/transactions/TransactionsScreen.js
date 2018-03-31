import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import TransactionsHeaderContainer from "./TransactionsHeaderContainer";
import ActionButton from "../../components/ActionButton";

const TransactionsScreen = ({navigation}) => (
    <ScreenWrapper>
        <ActionButton
            iconName="add"
            onPress={() => Alert.alert("Test")}
        />
    </ScreenWrapper>
);

TransactionsScreen.propTypes = {
    navigation: PropTypes.object,
};

TransactionsScreen.navigationOptions = ({navigation}) => ({
    title: 'Transactions',
    header: <TransactionsHeaderContainer navigation={navigation}/>
});

export default TransactionsScreen;