import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import firebase from 'firebase';

var Button = require('../common/button')


module.exports = React.createClass({
    getInitialState: function () {
        return {
            username: '',
            password: ''
        }
    },
    render: function () {
        return (
            <View style={styles.container}>
                <Text>Sign In</Text>
                <Text style={styles.label}>Username:</Text>
                <TextInput style={styles.input}
                    value={this.state.username}
                    onChangeText={(text) => this.setState({ username: text })}
                />
                <Text style={styles.label}>Password:</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={(text) => this.setState({ password: text })} />
                <Button text={'Sign In'} onPress={this.onPress} />
            </View>
        )
    },
    onPress: function () {
        // Log the user in 
        firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
            .then(function (result) {
                console.log(result);
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 4,
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        alignSelf: 'center'
    },
    label: {
        fontSize: 18
    }
})