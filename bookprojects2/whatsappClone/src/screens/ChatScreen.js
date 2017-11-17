import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';
// import { getMockData } from '../services/api';
import Compose from '../components/Compose';
import Message from '../components/Message';
import { getMessages , postMessage } from '../services/api';




export default class ChatScreen extends Component {

  state = {
    messages: []
  }
  keyboardVerticalOffset = 80;


  componentWillMount() {
    // getMockData().then((messages) =>
    //   this.setState({
    //     messages
    //   })
    // )

    this.unsubscribeGetMessages = getMessages((snapshot) => {
      this.setState({ messages: Object.values(snapshot.val()) })
    })
  }

  componentWillUnmount() {
    this.unsubscribeGetMessages();
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.name}`
  })

  render() {
    return (
      // <ImageBackground
      //   style={styles.container}
      //   source={require('assets/imgs/background.png')}>
      //   <FlatList
      //     data={this.state.messages}
      //     renderItem={({ item }) =>
      //       <View>
      //         <Text> {item.message} </Text>
      //       </View>
      //     }
      //   />
      // </ImageBackground>


      // <ImageBackground
      //   style={styles.container}
      //   source={require('../assets/imgs/background.png')}>
      //   <FlatList
      //     data={this.state.messages}
      //     renderItem={({ item }) =>
      //       this.getMessageRow(item)
      //     }
      //     keyExtractor={(item, index) => (`message-${index}`)}
      //   />
      // </ImageBackground>



      <ImageBackground
        style={styles.container}
        source={require('../assets/imgs/background.png')}>
        <KeyboardAvoidingView behavior="padding"
          keyboardVerticalOffset={this.keyboardVerticalOffset}
          style={styles.container}>

          <FlatList
            data={this.state.messages}
            renderItem={({item}) => <Message item={item}/>
            }
            keyExtractor={(item, index) => (`message-${index}`)}
          />
          <Compose submit={postMessage} />

        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    // justifyContent: 'center',
    // alignItems: 'center'
  }
}