import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {connect} from "react-redux";
import {register} from "../redux/actions/Auth";
import {REGISTER} from "../redux/constants/ActionTypes";

export default class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            route: REGISTER,
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    }

    register(e) {
        this.props.onRegister(this.state.email, this.state.password, this.state.firstName, this.state.lastName);
        e.preventDefault();
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.registration_form} behaviour="padding">

                <Text style={styles.header}>Registration</Text>

                <TextInput style={styles.text_input} placeholder="First Name" placeholderTextColor="white"
                           underlineColorAndroid={'transparent'} onChangeText={(text) => this.setState({ firstName : text })}/>
                <TextInput style={styles.text_input} placeholder="Last Name" placeholderTextColor="white"
                           underlineColorAndroid={'transparent'} onChangeText={(text) => this.setState({ lastName : text })}/>
                <TextInput style={styles.text_input} placeholder="Email" placeholderTextColor="white"
                           underlineColorAndroid={'transparent'} keyboardType="email-address" onChangeText={(text) => this.setState({ email : text })}/>
                <TextInput style={styles.text_input} placeholder="Password" placeholderTextColor="white"
                           underlineColorAndroid={'transparent'} onChangeText={(text) => this.setState({ password : text })}
                           secureTextEntry={true}/>

                <TouchableOpacity style={styles.button} onPress={(e) => this.register(e)}>
                    <Text style={styles.btn_text}>Sign up</Text>
                </TouchableOpacity>

                <Text style={styles.button} onPress={() => this.props.navigation.navigate('LoginForm')}>Login</Text>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    registration_form: {
        alignSelf: 'stretch',

    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1
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

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRegister: (username, password, firstName, lastName) => { dispatch(register(username, password, firstName, lastName)); }
    }
};

connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);