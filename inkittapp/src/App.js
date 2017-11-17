import React from 'react';
import {
  Text,
  View,
  AppRegistry
} from 'react-native';
import Chapter from './components/Chapter';
import Header from './components/Header';

const InkittApp = () => {
  return (
    <View style={{flex:1}}>
       <Header headerText={"Chapter"} />
      <Chapter/>
    </View>

  )
}
export default InkittApp;