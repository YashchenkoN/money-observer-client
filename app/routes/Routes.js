import screens from "../screens/Screens";
import TransactionsNavigator from "../navigators/TransactionsNavigator";
import SettingsNavigator from "../navigators/SettingsNavigator";
import DashboardNavigator from "../navigators/DashboardNavigator";


const Routes = {
    [screens.TransactionsRoot]: {
        screen: TransactionsNavigator
    },
    [screens.DashboardRoot]: {
        screen: DashboardNavigator
    },
    [screens.SettingsRoot]: {
        screen: SettingsNavigator
    },
};

export default Routes;
