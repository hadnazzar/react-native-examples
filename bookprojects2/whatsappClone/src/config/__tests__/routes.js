import 'react-native';
import React from 'react';
import routes from '../routes';
import Home from '../../screens/Home';
import ChatScreen from '../../screens/ChatScreen';


// it('has all needed routes', () => {
//   expect(routes).toEqual({
//     home: { screen: Home },
//     chat: { screen: ChatScreen }
//   })
// })

it('has all needed routes', () => {
  expect(routes).toMatchSnapshot();
})

it('has home screen', () => {
  expect(routes.home.screen).toBe(Home);
})

it('has chat screen', () => {
  expect(routes.chat.screen).toBe(ChatScreen);
})