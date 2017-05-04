import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Moment from 'moment';

import DayItem from './src/day-item.js';

var DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

//  Create a react component
var Weekdays = React.createClass({
  render: function(){
    return <View style={styles.container}>
      {/*<Text>  
        Days of week : 
      </Text>
      <Text> 
      {Moment().format('dddd')}
      </Text>*/}
      {/*<DayItem day={DAYS[0]}/>*/}
      {this.days()}
    </View>
  },
  days: function() {
    //Moment.js sonrası
    var dayItems = [];

    for(var i=0; i<7; i++){
      var day = Moment().add(i,'days').format('dddd');
      dayItems.push(
        <DayItem day={day} daysUntil = {i}/>
      )
    }

    return dayItems;


    //Moment.js öncesi
    // days = DAYS.map(function(day){
    //     //Called 7 times, one for each day of week. 
    //     return <DayItem day={day}/>
    // });
    // return days;

    // days // An array of DayItem components, one for each day of the week. 
    // days = [<DayItem day="Sunday",<DayItem day="Monday"]...}
  }
});

// Style the React Component 
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Moves stuff height wise
    alignItems: 'center' // Moves stuff width wise
    //flex-start, flex-end, center
  }
});


// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays;
});  