import React from 'react';
import {Alert, Button, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";
import {register} from "../redux/actions/Registration";
import Loader from "../components/Loader";
import t from "tcomb-form-native";

const mapStateToProps = (state, ownProps) => {
    return {
        token: state.token,
        expiration: state.expiration,
        isLoading: state.register.isLoading,
        error: state.register.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRegister: (email, password, firstName, lastName) => {
            dispatch(register(email, password, firstName, lastName));
        }
    }
};

const RegisterObject = t.struct({
    email: t.String,
    password: t.String,
    firstName: t.String,
    lastName: t.String
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
export default class RegistrationScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            token: null,
            expiration: null,
            isLoading: false,
            error: null,

            value: {
                email: '',
                password: '',
                firstName: '',
                lastName: ''
            }
        }
    }

    register = () => {
        let value = this.refs.form.getValue();

        if (value) {
            this.setState({value});

            this.props.onRegister(
                value.email,
                value.password,
                value.firstName,
                value.lastName
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
                <KeyboardAvoidingView style={styles.registration_form} behaviour="padding">

                    <Loader loading={isLoading}/>

                    <Form ref="form" type={RegisterObject} options={options} value={this.state.value}/>

                    <TouchableOpacity style={styles.button} onPress={this.register}>
                        <Text style={styles.btn_text}>Sign up</Text>
                    </TouchableOpacity>

                    <Button buttonStyle={{marginTop: 40, padding: 20}}
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
        paddingLeft: 60,
        paddingRight: 60
    },
    registration_form: {
        alignSelf: 'stretch',

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
    },
    error: {
        borderColor: '#cb002f',
        borderWidth: 1
    }
});