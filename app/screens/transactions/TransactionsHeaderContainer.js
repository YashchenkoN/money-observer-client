import {connect} from 'react-redux';
import {getTransactions} from "../../redux/actions/Transactions";
import TransactionsHeader from "./TransactionsHeader";

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
        onRefresh: (token) => {
            dispatch(getTransactions(token));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsHeader);
