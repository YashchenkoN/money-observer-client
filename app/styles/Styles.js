import {StyleSheet} from "react-native";
import colors from "./Colors";

export default styles = StyleSheet.create({
    rootStyle: {
        flex: 1,
    },
    headerStyle: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: colors.defaultPrimary
    },
    headerIconStyle: {
        marginLeft: 16,
        marginRight: 16,
        fontSize: 26,
        color: colors.textPrimary
    },
    rowStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});