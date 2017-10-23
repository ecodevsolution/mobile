import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar} from 'react-native';

class LoginForm extends Component {



    render() {
        return (
            <View style={styles.container}>
              <StatusBar 
                barStyle="light-content"
              />

               <TextInput
                       placeholder="Email"
                       placeholderTextColor = 'rgba(255,255,255,0.7)'
                       returnKeyType="next"
                       style={styles.input}
                       onSubmitEditing={()=> this.passwordInput.focus()}
                       keyboardType="email-address"
                       autoCapitalize="words"
                       autoCorrect={false}
                       underlineColorAndroid="transparent"
               />
               <TextInput
                       placeholder="Password"
                       placeholderTextColor = 'rgba(255,255,255,0.7)'
                       returnKeyType="go"
                       secureTextEntry
                       style={styles.input}
                       underlineColorAndroid="transparent"
                       ref={(input) => this.passwordInput = input}
               /> 

               <TouchableOpacity style={styles.buttonContainer}>            
                       <Text style={styles.buttonText}>LOGIN</Text>
               </TouchableOpacity>

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
        marginBottom: 10,
        color : '#FFF',
        paddingHorizontal : 10      
       
    },
    buttonContainer : {
        backgroundColor: '#27ae60',
        paddingVertical: 15
    },
    buttonText : {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'

    },
    
})
export default LoginForm;