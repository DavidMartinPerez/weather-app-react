import React, { Component } from 'react'
import Location from './location'
import WeatherData from './weatherData'
import { RAIN } from '../../constans/weathers'

import './style.css'


const data = {
    temperature: 5,
    weatherState: RAIN,
    humidity: 10,
    wind: "10 m/s"
}


class WeatherLocation extends Component{

    constructor() {
        super();

        this.state = {
            city: 'Málaga',
            data: data
        }
    }

    handleUpdate = () => {
        
    }

    render(){
        return (
            <div className="weatherLocationCont">
                < Location city={ this.state.city } />
                < WeatherData data={ data } />
                <button onClick={ this.handleUpdate } >Refrescar</button>
            </div>
        )
    }

}


export default WeatherLocation;
