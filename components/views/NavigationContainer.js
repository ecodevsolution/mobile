import React from "react";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";



const navigationContainer = StackNavigator({
  Home: {screen: HomeScreen},
  About: {screen: AboutScreen}
}, {
  headerMode: 'screen'
})


export default navigationContainer;