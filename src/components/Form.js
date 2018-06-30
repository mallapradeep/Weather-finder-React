import React, {Component} from 'react';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.getWeather(this.refs.city.value, this.refs.country.value);
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='City' ref="city" required/>
                <input type='text' placeholder='Country' ref="country" required/>
                <input type='submit' value='Find'/>
            </form>
        );
    }
}