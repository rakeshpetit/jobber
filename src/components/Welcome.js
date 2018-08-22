import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Slide } from './ui/Slide';

const slider = [
    { text: 'Welcome to Jobber', color: '#03A9F4', image:require('../../assets/1.jpg')},
    { text: 'Find jobs smooth and easy', color: '#009688', image:require('../../assets/2.png')},
    { text: 'Swipe the jobs left and right', color: '#09B7E2', image:require('../../assets/3.jpg')}
]
class Welcome extends Component {
    enterAuth = () => {
        this.props.navigation.navigate('Auth');
    }  
  render() {
    return (
     <Slide enterAuth={this.enterAuth} data={slider}/>
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
