import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LoginForm from './LoginForm';

class Login extends Component {
    render() {
        return (
           <View style={styles.container}>
               <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source = {require('./assets/images/splash.png')}
                    />
                    <Text style= {styles.Title}>An app making easy to buy assurance </Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
           </View>
        );
    }
}


const styles = StyleSheet.create({
    container :{
        flex :1,
        backgroundColor: '#2ecc71'
    },
    logoContainer : {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    formContainer :{

    } ,
    logo : {
        width: 100,
        height: 100
    },
    Title : {
        color :'white',
        marginTop: 10,
        width: 150,
        textAlign: 'center'
    }
})
export default Login;