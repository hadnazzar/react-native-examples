import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native';

import { UIManager } from 'react-native'
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);


export default class Home extends Component {

  componentDidMount() {
    console.log("componentDidMount");
    const { configureNext, create, Properties, Types } = LayoutAnimation;
    configureNext(
      create(500, Types.linear, Properties.scaleXY)
    )
  }


  static navigationOptions = {
    title: "Home Screen"
  }

  state = {
    activeIndex: 0,
    items:1

  }



  onPressButton(activeIndex) {
    //Animations
    // LayoutAnimation.linear();
    // LayoutAnimation.spring();
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)

    this.setState({ activeIndex });
  }

  onPressButton2(items){
    this.state({items})
  }

  getStyleByCollapsingIndex(index) {
    return {
      redStyle: index === 1 && styles.collapsed,
      greenStyle: index === 2 && styles.collapsed,
      blueStyle: index === 3 && styles.collapsed
    }
  }




  render() {
    const {
      redStyle,
      greenStyle,
      blueStyle
    } = this.getStyleByCollapsingIndex(this.state.activeIndex)


    return (
      // <View style={styles.container}>
      //   <Button
      //     onPress={() => this.props.navigation.navigate('chat', { name: 'John' })}
      //     title="press"
      //   />
      // </View>

      
      
      
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Button style={styles.button} title="Collapse Red" onPress={() => this.onPressButton(1)} />
          <Button style={styles.button} title="Collapse Green" onPress={() => this.onPressButton(2)} />
          <Button style={styles.button} title="Collapse Blue" onPress={() => this.onPressButton(3)} />
          <Button style={styles.button} title="Reset" onPress={() => this.onPressButton(0)} />
        </View>

        <View style={[styles.red, styles.area, redStyle]} />
        <View style={[styles.green, styles.area, greenStyle]} />
        <View style={[styles.blue, styles.area, blueStyle]} />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    // backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  red: {
    backgroundColor: 'red'
  },
  green: {
    backgroundColor: 'green'
  },
  blue: {
    backgroundColor: 'blue'
  },
  area: {
    flex: 1
  },
  collapsed: {
    flex: 0
  },

}