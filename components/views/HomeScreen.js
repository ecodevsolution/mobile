import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
const HomeScreen = ({navigation: {navigate}}) =>
  <View>
    <Text>Home Screen</Text>
    <TouchableOpacity onPress={() => navigate("About")}>
      <Text>Go to About</Text>
    </TouchableOpacity>
  </View>
HomeScreen.navigationOptions = {
 title : 'Home'
};

export default HomeScreen;