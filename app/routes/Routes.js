import screens from "../screens/Screens";
import TransactionsNavigator from "../navigators/TransactionsNavigator";
import SettingsNavigator from "../navigators/SettingsNavigator";


const Routes = {
    [screens.TransactionsRoot]: {
        screen: TransactionsNavigator
    },
    [screens.SettingsRoot]: {
        screen: SettingsNavigator
    },
};

export default Routes;
