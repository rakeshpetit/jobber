import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet, View, Dimensions, Image } from 'react-native'
import { Button } from "react-native-elements";

const width = Dimensions.get('window').width;

export class Slide extends Component {
    renderLastSlide(index) {
        if(index === this.props.data.length -1 ){
            return (<Button
                raised                
                title="Enter"
                onPress={this.props.enterAuth}
                backgroundColor="rgba(0,0,0,0)"
                color="black"
              />);
        }

    }
renderSlides () { 
    return this.props.data.map((slide, index) => {
        return (
            <View style={[styles.slide, {backgroundColor: slide.color}]} key={index}>
                <Image style={styles.imageContainer} source={slide.image} />
                <Text style={styles.slideText}>{slide.text}</Text>
                {this.renderLastSlide(index)}
            </View>
        );
    });
}
  render() {
    return (
      <ScrollView pagingEnabled horizontal style={{flex: 1}}>
        {this.renderSlides()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    slideText: {
      margin: '5%',       
      fontSize: 30, 
      color: 'white'     
    },
    slide: {         
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width
    },
    imageContainer: {
        marginLeft: '10%',
        marginRight: '10%',
        width: 200,
        height: 200
    }
  });

export default Slide