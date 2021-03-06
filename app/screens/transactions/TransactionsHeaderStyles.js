import {StyleSheet} from 'react-native';
import colors from "../../styles/Colors";

const appBarHeight = 44;
const statusBarHeight = 20;

const styles = StyleSheet.create({
    rootStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: statusBarHeight,
        height: statusBarHeight + appBarHeight,
        shadowColor: colors.black,
        shadowOpacity: 0.1,
        shadowRadius: StyleSheet.hairlineWidth,
        shadowOffset: {
            height: StyleSheet.hairlineWidth,
        },
        elevation: 4,
    },
});

export default styles;
