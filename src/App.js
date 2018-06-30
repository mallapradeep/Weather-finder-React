import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '999b3808b5ffa74a486f718e3c1df453';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      weather:{
        // temperature: undefined,
        // city: undefined,
        // country: undefined,
        // humidity: undefined,
      },
      error: '',
    };
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather = async(city, country) => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    if(data.cod === 200){
      this.setState({
        weather:{ 
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
        },
        error:''
      });
    }else{
      this.setState({weather:{}, error: data.message});
    }
  }
  render() {
    return (
      <div className="App">
          <Title/>
          <Form getWeather={this.getWeather}/>
          <Weather data={this.state.weather} error={this.state.error}/>
      </div>
    );
  }
}

export default App;
