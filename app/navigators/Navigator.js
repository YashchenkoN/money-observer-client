import {DrawerNavigator} from "react-navigation";
import Routes from "../routes/Routes";
import Drawer from "../components/Drawer";
import colors from "../styles/Colors";

const Navigator = DrawerNavigator;

const navColors = {
    activeTintColor: colors.defaultPrimary,
    inactiveTintColor: colors.secondaryText,
};

const config = {
    contentComponent: Drawer,
    contentOptions: {
        ...navColors,
    }
};

export default Navigator(Routes, config);