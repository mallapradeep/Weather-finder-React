import React, {Component} from 'react';

export default class Weather extends Component{
    render(){
        let weather = this.props.data || '';
        console.log(weather);
        return (
            <div id="weather">
                { this.props.error || ''}
                { weather.city ? <p>Location: {weather.city}</p> : ''}
                {weather.temperature? <p>Temperature: {weather.temperature}</p> : ''}
                {weather.country ? <p>Country: {weather.country}</p> : ''}
                {weather.humidity? <p>Humidity: {weather.humidity}</p> : ''}
                {weather.description ?<p>Description: {weather.description}</p> : ''}
            </div>
        );
    }
}
