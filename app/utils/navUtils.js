import colors from "../styles/Colors";
import PropsProxy from "../components/PropsProxy";
import NavIcon from "../components/NavIcon";

const navOptions = ({ title, icon }) => ({
    navigationOptions: {
        title,
        ['drawerIcon']: PropsProxy(NavIcon, { name: icon }),
        headerStyle: styles.headerStyle,
        headerTintColor: colors.textPrimary,
    },
});

export default navOptions;
