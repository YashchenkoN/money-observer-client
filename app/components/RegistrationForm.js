import React from 'react';
import {
    Button,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import {connect} from "react-redux";
import {register} from "../redux/actions/Registration";
import {REGISTER} from "../redux/constants/ActionTypes";
import Loader from "./Loader";
import {Alert} from "react-native";

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.registration.isLoggedIn,
        isLoading: state.registration.isLoading,
        error: state.registration.error,
        token: state.registration.token
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRegister: (username, password, firstName, lastName) => {
            dispatch(register(username, password, firstName, lastName));
        }
    }
};

@connect(mapStateToProps, mapDispatchToProps)
export default class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            route: REGISTER,
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            isLoading: false
        }
    }

    register(e) {
        this.props.onRegister(this.state.email, this.state.password, this.state.firstName, this.state.lastName);
        e.preventDefault();
    }

    componentDidUpdate() {
        if (this.props.error != null && this.props.error !== undefined && this.props.error !== '') {
            setTimeout(() => Alert.alert(this.props.error), 600);
        }
    }

    render() {
        const {isLoading} = this.props;

        return (
            <View style={styles.container}>
                <KeyboardAvoidingView style={styles.registration_form} behaviour="padding">

                    <Loader loading={isLoading}/>

                    <TextInput style={styles.text_input} placeholder="First Name" placeholderTextColor="white"
                               underlineColorAndroid={'transparent'}
                               onChangeText={(text) => this.setState({firstName: text})}/>
                    <TextInput style={styles.text_input} placeholder="Last Name" placeholderTextColor="white"
                               underlineColorAndroid={'transparent'}
                               onChangeText={(text) => this.setState({lastName: text})}/>
                    <TextInput style={styles.text_input} placeholder="Email" placeholderTextColor="white"
                               underlineColorAndroid={'transparent'} keyboardType="email-address"
                               onChangeText={(text) => this.setState({email: text})}/>
                    <TextInput style={styles.text_input} placeholder="Password" placeholderTextColor="white"
                               underlineColorAndroid={'transparent'}
                               onChangeText={(text) => this.setState({password: text})}
                               secureTextEntry={true}/>

                    <TouchableOpacity style={styles.button} onPress={(e) => this.register(e)}>
                        <Text style={styles.btn_text}>Sign up</Text>
                    </TouchableOpacity>

                    <Button buttonStyle={{marginTop: 40}}
                            backgroundColor="transparent"
                            textStyle={{color: "#fff"}}
                            title="Login"
                            onPress={() => this.props.navigation.navigate('Login')}/>

                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f',
        paddingLeft: 60,
        paddingRight: 60
    },
    registration_form: {
        alignSelf: 'stretch',

    },
    text_input: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30
    },
    btn_text: {
        color: '#fff',
        fontWeight: 'bold'
    }
});