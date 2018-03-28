import {StackNavigator} from "react-navigation";
import RegistrationForm from "../components/RegistrationForm";
import LoginForm from "../components/LoginForm";

export const AuthNavigator = StackNavigator({
    Register: {
        screen: RegistrationForm,
        navigationOptions: {
            title: 'Registration'
        }
    },
    Login: {
        screen: LoginForm,
        navigationOptions: {
            title: 'Login'
        }
    }
});