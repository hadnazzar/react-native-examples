import React, { Component } from 'react';
import { TextInput, View, Text, Image } from 'react-native';
import Forecast from './components/Forecast';



class WeatherProject extends Component {

  state = {
    city: '',
    forecast: null
    // forecast: {
    //   main: 'Clouds',
    //   description: 'few clouds',
    //   temp: 17
    // }
  };

  onTextChange = (event) => {
    console.log(event.nativeEvent.text)
    var city = event.nativeEvent.text;
    this.setState({
      city: city
    });

    fetch('https://api.openweathermap.org/data/2.5/weather?appid=201fc6647a7aae6453205c465d95e4e4&q=' + city + '&units=metric')
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        this.setState({
          forecast: {
            main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.main.temp
          }
        });
      })
      .catch((error) => {
        console.warn(error);
      })
  }
  render() {

    var content = null;
    if (this.state.forecast !== null) {
      content = <Forecast
        main={this.state.forecast.main}
        description={this.state.forecast.description}
        temp={this.state.forecast.temp}
      />
    }

    return (
      <View style={styles.containerStyle}>
        <Image
          source={require('./images/background.jpg')}
          resizeMode="cover"
          style={styles.backdrop}
        >
          <View style={styles.overlay}>
            <Text style={styles.textStyle}>Input is {this.state.city} </Text>
            {content}
            <TextInput
              style={styles.inputStyle}
              returnKeyType='go'
              onSubmitEditing={this.onTextChange}
            />
          </View>
        </Image>
      </View>

    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  inputStyle: {
    fontSize: 20,
    borderWidth: 2,
    height: 40,
    width: 140,
    textAlign: 'center',
    color: 'white',
    borderColor: 'white'
  },
  backdrop: {
    // flex: 1,
    // width: null,
    // height: null,
    // resizeMode: 'cover',
    // flexDirection: 'column'
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    flex: 2,
  },
  overlay:{
    paddingTop:5,
    opacity:0.5,
    fontColor:'white'

  }
}
export default WeatherProject;