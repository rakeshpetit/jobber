import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator  } from 'react-navigation';
import Auth from './src/components/Auth';
import Welcome from './src/components/Welcome';
import Map from './src/components/Map';
import Deck from './src/components/Deck';
import Review from './src/components/Review';
import Settings from './src/components/Settings';

const MainNav = createBottomTabNavigator (
  {
    Welcome: { screen: Welcome },
    Auth: { screen: Auth },
    Main: {
      screen:  createBottomTabNavigator (
        {
          Map: { screen: Map },
          Deck: { screen: Deck },
          Review: { screen: createStackNavigator({
            Review: { screen: Review },
            Settings: { screen: Settings },
          }) }
        })
      }
    });

export default class App extends React.Component {  
  render() {    
    return (
      <View style={styles.container}>
        <MainNav />        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
