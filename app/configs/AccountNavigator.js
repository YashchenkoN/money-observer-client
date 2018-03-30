import {StackNavigator} from "react-navigation";
import History from "../components/History";
import Dashboard from "../components/Dashboard";

export const AccountNavigator = StackNavigator({
    History: {
        screen: History,
        navigationOptions: {
            title: 'History'
        }
    },
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            title: 'Dashboard'
        }
    }
});