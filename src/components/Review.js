import React, { Component } from "react";
import { Text, View, Platform, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

class Review extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        title: "Review jobs",
      headerRight: (
        <Button
        style={{marginTop: Platform.OS === "android" ? 24 : 0}}
        title="Settings"
        onPress={ () =>  navigation.navigate("Settings")           
        }
        backgroundColor="rgba(0,0,0,0)"
        color="blue"
      />
      ),
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> Review </Text>
        <Text> Review </Text>
        <Text> Review </Text>
        <Text> Review </Text>
        <Text> Review </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default Review;
