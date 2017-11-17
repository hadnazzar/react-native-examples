/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Button,
  ActivityIndicator,
  SectionList,
  WebView

} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {

      sectionListProps: [
        {
          title: 'title',
          description: 'description'
        },
        {
          title: 'section',
          description: '1'
        }
      ],

      flatListProps: [
        {
          title: 'title',
          description: 'description'
        },
        {
          title: 'kek',
          description: 'pasta'
        }
      ]

    };
    this.showList = this.showList.bind(this);
  }

  getFlatList() {
    return (
      <SectionList key="listView"
        style={styles.listView}
        sections={[
          {
            data: this.state.sectionListProps,
            title: 'Section List props',
            key: 'slp'
          },
          {
            data: this.state.flatListProps,
            title: 'Flat List props',
            key: 'flp'
          }
        ]}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => (`${item}--${index}`)}
        renderItem={({ item, index }) =>
          <View style={styles.listRow}>
            <View style={styles.rowHeader}>
              <Text>{item.title}</Text>
            </View>
            <View>
              <Text style={styles.description}>{item.description}
              </Text>
            </View>
          </View>
        } />
    )
  }

  getWebView() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <WebView style={styles.webView}
          scalesPageToFit
          source={{
            uri:
            'https://facebook.github.io/react-native/docs/webview.html'
          }} />
      </View>
    )
  }

  showList() {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        showList: true,
        loading: false,
      })
    }, 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        {this.state.showList ?
          this.getWebView() :
          this.state.loading ?
            <ActivityIndicator color="black" size="small" animating /> :
            <Button title="press" color="black"
              onPress={this.showList} />
        }
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  webView:{
   flex:1,
   width:320
  }
});
