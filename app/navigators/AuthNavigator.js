import {StackNavigator} from "react-navigation";
import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";

export const AuthNavigator = StackNavigator({
    Register: {
        screen: RegistrationScreen,
        navigationOptions: {
            title: 'Registration'
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Login'
        }
    }
});