import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
               <TextInput
                    placeholder="username or email"
                    placeholderTextColor = 'rgba(255,255,255,0.7)'
                    style={styles.input}
               />
               <TextInput
                    placeholder="password"
                    placeholderTextColor = 'rgba(255,255,255,0.7)'
                    style={styles.input}
               />
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container :{
        padding : 20
    },
    input : {
        height : 40,
        backgroundColor : 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color : '#FFF',
        paddingHorizontal : 10,
        textDEc
       
    }
})
export default LoginForm;