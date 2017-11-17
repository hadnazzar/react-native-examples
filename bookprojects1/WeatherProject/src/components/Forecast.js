import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Forecast extends Component {
  render() {
    return (
      <View>
        <Text style={styles.bigTextStyle}>
          {this.props.main}
        </Text>
        <Text style={styles.mainTextStyle}>
          {this.props.description}
        </Text>
        <Text style={styles.bigTextStyle}>
          {this.props.temp}
        </Text>
      </View>
    )
  }
}

const styles = {
  bigTextStyle:{
    fontSize:20,
    textAlign:'center',
    margin:10,
  },
  mainTextStyle:{
    fontSize:16,
    textAlign:'center',
  }
}


export default Forecast;
