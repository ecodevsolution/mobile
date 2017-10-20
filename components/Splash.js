import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class Splash extends Component {

  render() {
    return (
       <View style={styles.Wrapper}>
          <View style ={styles.titleWraper}>
              
              <Image
                style={{flex:1, height:150, width: 150}}
                source={require('./assets/images/splash.png')}
                resizeMode="contain"
              />
          </View>
          <View>
              <Text style={styles.subTitle}>Powered By React Native 2017</Text>
          </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  Wrapper : {
    backgroundColor: '#27ae60',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Title : {
    color: 'white',
    fontSize: 45,

  },
  subTitle : {
    color : 'white',
    fontWeight : '200',
    paddingBottom: 20
 
  },
  titleWraper :{
    justifyContent:'center',
    flex: 1
  }
})

export default Splash;
