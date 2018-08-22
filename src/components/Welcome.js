import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
        <Text>Welcome</Text>
        <Text>Welcome</Text>
        <Text>Welcome</Text>
        <Text>Rayu</Text>
        <Text>Eashwar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default Welcome;
