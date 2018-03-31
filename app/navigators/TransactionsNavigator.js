import screens from "../screens/Screens";
import TransactionsScreen from "../screens/TransactionsScreen";
import {StackNavigator} from "react-navigation";
import navOptions from "../utils/navUtils";

const TransactionsNavigator = StackNavigator({
    [screens.Transactions]: {
        screen: TransactionsScreen,
    }
}, {
    ...navOptions({
        title: 'Transactions',
        icon: 'chart-arc',
    }),
});

export default TransactionsNavigator;