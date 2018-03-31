import {StackNavigator} from 'react-navigation';
import SettingsScreen from "../screens/SettingsScreen";
import navOptions from "../utils/navUtils";
import screens from "../screens/Screens";

const SettingsNavigator = StackNavigator({
    [screens.Settings]: {
        screen: SettingsScreen,
    },
}, {
    ...navOptions({
        title: 'Settings',
        icon: 'settings',
    }),
});

export default SettingsNavigator;
