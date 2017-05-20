import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';

var StopWatch = React.createClass({

  getInitialState: function () {
    return{
      timeElapsed: 0,
      running: false,
      startTime: null,
      laps: []
    }
  },
  render: function () {
    return <View style={styles.container}>
      <View style={[styles.header, this.border('yellow')]}>
        <View style={[styles.timerWrapper, this.border('red')]}>
          <Text style={styles.timer}>
            {formatTime(this.state.timeElapsed)}
          </Text>
        </View>
        <View style={[styles.buttonwrapper, this.border('green')]}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>
      <View style={[styles.footer, this.border('blue')]}>
        {this.laps()}
      </View>
    </View>
  },
  laps: function(){
    return this.state.laps.map(function(time,index){
      return <View style={styles.lap}>
        <Text style={styles.lapText}>
            Lap #{index +1} 
        </Text>
        <Text style={styles.lapText}>
          {formatTime(time)}
        </Text>
        </View>
    })
  },
  startStopButton: function () {

    var style = this.state.running ? styles.stopButton : styles.startButton

    return <TouchableHighlight
      underlayColor="grey"
      onPress={this.handleStartPress}
      style={[styles.button , style]}>
      <Text>
        {this.state.running ? 'Stop' : 'Start'}
        </Text>
    </TouchableHighlight>
  },
  lapButton: function () {
    return <TouchableHighlight 
    style={styles.button}
    underlayColor='gray'
    onPress={this.handleLapPress}>
      <Text>
        Lap
        </Text>
    </TouchableHighlight>
  },
  handleStartPress: function () {
    if(this.state.running){
      clearInterval(this.interval);
      this.setState({running: false});
      return
    }
    
    this.setState({startTime: new Date()})

    var startTime = new Date();
     this.interval = setInterval( () => {
      // Updating state with new value
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      });
    },30);
  },
  handleLapPress: function(){
    var lap = this.state.timeElapsed;

this.setState({
  startTime : new Date(),
  laps: this.state.laps.concat([lap])

});

  },
  border: function (color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonwrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer:{
    fontSize:60
  },
  button:{
    borderWidth:2,
    height:100,
    width:100,
    borderRadius:50,
    justifyContent:'center',
    alignItems: 'center'
  },
  startButton:{
    borderColor:'#00CC00'
  },
  stopButton:{
    borderColor: '#CC0000'
  },
  lap:{
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  lapText:{
    fontSize: 30
  }
})

AppRegistry.registerComponent('stopwatch', function () {
  return StopWatch;
});

// AppRegistry.registerComponent('stopwatch', () => stopwatch);