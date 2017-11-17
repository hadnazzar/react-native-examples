import 'react-native';
import React from 'react';
import routes from '../../config/routes';
import Home from '../Home';
import ChatScreen from '../ChatScreen';

it('renders correctly', () => {
  const tree = renderer.create(
    <Home />
  );
  expect(tree).toMatchSnapshot();
})

it('has proper navigation options', () => {
  expect(Home.navigationOptions).toMatchSnapshot();
})