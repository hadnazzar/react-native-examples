/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
var MapView = require('react-native-maps');

var Api = require('./src/api');

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


var Weather = React.createClass({

  getInitialState: function () {
    return {
      pin: {
        latitude: 0,
        longitude: 0
      },
      city: '',
      temperature: '',
      description: ''
    }
  },
  render: function () {

    var pin = {
      latitude: 40.78825,
      longitude: 29.4324
    }

    return (
      <View style={styles.container}>

        <MapView
          onRegionChangeComplete={this.onRegionChangeComplete}
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: 32.4324,
            latitudeDelta: 0.0,
            longitudeDelta: 0.0,
          }}
        >
          <MapView.Marker
            coordinate={this.state.pin}
            title={this.state.city}
            description={this.state.temperature}
          />
        </MapView>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{this.state.city}</Text>
          <Text style={styles.text}>{this.state.temperature}</Text>
          <Text style={styles.text}>{this.state.description}</Text>
        </View>
        
      </View>
    )
  },
  onRegionChangeComplete: function (region) {
    console.log(region);
    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }

    });

    //this ==== compoenent
    Api(region.latitude, region.longitude)
      .then((data) => {
        console.log(data);
        this.setState(data);
      }).catch((error) => {
        console.log("Api call error");
        alert(error.message);
      });
  }
})


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  map: {
    flex: 2,
    marginTop:30
  },
  textWrapper:{
    flex:1,
    alignItems: 'center'
  },
  text:{
    fontSize: 30
  }
});

AppRegistry.registerComponent('weather', () => Weather);
