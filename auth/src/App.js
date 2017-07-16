import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm'
import * as firebase from 'firebase'

class App extends Component {
    state = {
        loggedIn: null
    };
    componentWillMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyD7SQnTjvAo-znu3YinLkYIhBfu0NkPFos",
            authDomain: "auth-576ea.firebaseapp.com",
            databaseURL: "https://auth-576ea.firebaseio.com",
            projectId: "auth-576ea",
            storageBucket: "auth-576ea.appspot.com",
            messagingSenderId: "142580249457"
        };
        const firebaseApp = firebase.initializeApp(firebaseConfig);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            }
            else {
                this.setState({ loggedIn: false })
            }
        });
    }
    renderConent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return (
                    <LoginForm />
                )
            default:
                return <Spinner size="large" />
        }
    }
    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderConent()}
            </View>
        )
    }
}

export default App;