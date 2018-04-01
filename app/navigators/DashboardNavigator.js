import screens from "../screens/Screens";
import {StackNavigator} from "react-navigation";
import navOptions from "../utils/navUtils";
import DashboardScreen from "../screens/DashboardScreen";

const DashboardNavigator = StackNavigator({
    [screens.Dashboard]: {
        screen: DashboardScreen,
    }
}, {
    ...navOptions({
        title: 'Dashboard',
        icon: 'view-dashboard',
    }),
});

export default DashboardNavigator;