import React from 'react';
import {Alert, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";
import {login} from "../redux/actions/Login";
import Loader from "./Loader";
import t from "tcomb-form-native";

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

const LoginObject = t.struct({
    email: t.String,
    password: t.String
});

const Form = t.form.Form;

const formStyle = {
    ...Form.stylesheet,
    error: {
        color: 'red'
    }
};

const options = {
    stylesheet: formStyle,
    fields: {
        password: {
            password: true,
            secureTextEntry: true
        }
    }
};

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            token: null,
            isLoading: false,
            error: null,

            value: {
                email: '',
                password: ''
            }
        }
    }

    login = () => {
        let value = this.refs.form.getValue();

        if (value) {
            this.setState({value});

            this.props.onLogin(
                value.email,
                value.password
            );
        }
    };

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

                    <Form ref="form" type={LoginObject} options={options} value={this.state.value}/>

                    <TouchableOpacity style={styles.button} onPress={this.login}>
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