import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import TransactionsHeaderContainer from "./TransactionsHeaderContainer";
import ActionButton from "../../components/ActionButton";
import {getTransactions} from "../../redux/actions/Transactions";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        token: state.token,
        expiration: state.expiration,

        isLoading: state.transactions.isLoading,
        error: state.transactions.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetTransactions: (token) => {
            dispatch(getTransactions(token));
        }
    }
};

@connect(mapStateToProps, mapDispatchToProps)
class TransactionsScreen extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.onGetTransactions(
            this.props.token
        )
    }

    render() {
        return (
            <ScreenWrapper>
                <ActionButton
                    iconName="add"
                    onPress={() => Alert.alert("Test")}
                />
            </ScreenWrapper>
        )
    }
}

TransactionsScreen.propTypes = {
    navigation: PropTypes.object,
    token: PropTypes.string,
    expiration: PropTypes.string,
    transactions: PropTypes.array
};

TransactionsScreen.navigationOptions = ({navigation}) => ({
    title: 'Transactions',
    header: <TransactionsHeaderContainer navigation={navigation}/>
});

export default TransactionsScreen;