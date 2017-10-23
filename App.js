import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './components/Splash';
import Login from './components/Login';
import Home from './components/Home';

export default class App extends React.Component {
  render() {
    return (
       <Login />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
