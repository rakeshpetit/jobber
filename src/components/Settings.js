import React, { Component } from "react";
import { Text, View } from "react-native";

class Settings extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Settings"
    };
  };
  render() {
    return (
      <View>
        <Text> Settings </Text>
        <Text> Settings </Text>
        <Text> Settings </Text>
        <Text> Settings </Text>
        <Text> Settings </Text>
      </View>
    );
  }
}

export default Settings;
