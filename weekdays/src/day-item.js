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
        return{
            color: this.color(),
            fontWeight: this.fontWeight(),
            fontSize: this.fontSize(),
            lineHeight: this.lineHeight()
        }
    },
    color:function(){
        var opacity = 10/this.props.daysUntil;
        return ('rgba(0,0,0, '+opacity+')');
    },
    fontWeight:function(){
        var weight = 7 - this.props.daysUntil;
        return (weight * 100).toString();;
    },
    fontSize: function(){
        return 60 - 6*this.props.daysUntil;  
    },
    lineHeight: function(){
        return 70 - 4*this.props.daysUntil;  
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
