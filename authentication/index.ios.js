import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Main from './src/main.js'

// export default class authentication extends Component {
//   render(){
//     return <Main/>
//   }
// }

AppRegistry.registerComponent('authentication', () => Main);
