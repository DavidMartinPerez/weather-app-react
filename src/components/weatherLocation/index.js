import React from 'react'
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


const WeatherLocation = () => (
    <div className="weatherLocationCont">
        < Location city={'Málaga'} />
        < WeatherData data={data} />
    </div>
)


export default WeatherLocation;
