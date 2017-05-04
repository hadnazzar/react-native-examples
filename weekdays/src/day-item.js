//Import some code we need
import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

// Create our component 

var DayItem = React.createClass({
    render: function(){
        return <Text style={this.style()}>
            {this.props.day}
        </Text>
    },
    style: function(){

    }
});


//After add moment.js we will make dynamically 
// // Style our component
// var styles = StyleSheet.create({
//     day:{
//         fontSize: 20,
//         color: '#0000FF',

//     }
// });


//Make this code available elsewhere
module.exports = DayItem;
