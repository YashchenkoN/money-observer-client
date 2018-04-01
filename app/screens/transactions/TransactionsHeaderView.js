import {compose, withHandlers, withProps} from 'recompose';
import TransactionsHeader from './TransactionsHeader';
import {Alert} from "react-native";

const enhance = compose(
    withProps(({navigation}) => ({

    })),

    withHandlers({
        onRefresh: ({navigation}) => () => {
            Alert.alert("Refresh")
        },
    })
);

export default enhance(TransactionsHeader);
