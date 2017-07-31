import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBV0pe-hbYla55IjheFcYnHsLZabxYfqFM',
            authDomain: 'manager-dc477.firebaseapp.com',
            databaseURL: 'https://manager-dc477.firebaseio.com',
            projectId: 'manager-dc477',
            storageBucket: 'manager-dc477.appspot.com',
            messagingSenderId: '151789716084'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>Hello!</Text>
                </View>
            </Provider>
        )
    }
}

export default App;