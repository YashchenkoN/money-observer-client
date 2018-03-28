import React from 'react';
import {Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";
import {login} from "../redux/actions/Login";
import {LOGIN} from "../redux/constants/ActionTypes";
import Loader from "./Loader";

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.login.isLoggedIn,
        token: state.login.token,
        isLoading: state.login.isLoading,
        error: state.login.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => {
            dispatch(login(username, password));
        }
    }
};

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            route: LOGIN,
            email: '',
            password: '',
            isLoading: false,
            error: null
        }
    }

    login(e) {
        this.props.onLogin(this.state.email, this.state.password);
        e.preventDefault();
    }

    render() {
        const {isLoading, error} = this.props;

        if (error && !this.state.error) {
            this.state.error = error;
            setTimeout(() => {
                Alert.alert(error);
                this.state.error = null;
            }, 500);
        }

        return (
            <View style={styles.container}>
                <KeyboardAvoidingView style={styles.login_form} behaviour="padding">

                    <Loader loading={isLoading}/>

                    <TextInput style={styles.text_input} placeholder="Email" placeholderTextColor="white"
                               underlineColorAndroid={'transparent'} keyboardType="email-address"
                               onChangeText={(text) => this.setState({email: text})}/>
                    <TextInput style={styles.text_input} placeholder="Password" placeholderTextColor="white"
                               underlineColorAndroid={'transparent'}
                               onChangeText={(text) => this.setState({password: text})}
                               secureTextEntry={true}/>

                    <TouchableOpacity style={styles.button} onPress={(e) => this.login(e)}>
                        <Text style={styles.btn_text}>Login</Text>
                    </TouchableOpacity>

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
    login_form: {
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