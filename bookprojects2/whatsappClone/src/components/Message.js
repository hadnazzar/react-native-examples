import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';

export default class Message extends Component {

  render() {
    return (
      <View
        style={[
          styles.listItem,
          this.props.item.incoming ?
            styles.incomingMessage :
            styles.outgoingMessage
        ]}>
        <Text> {this.props.item.message} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    width: '70%',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5
  },
  incomingMessage: {
    alignSelf: 'flex-start',
  },
  outgoingMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#E1FFC7'
  }
});