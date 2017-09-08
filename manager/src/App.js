import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router'

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App;