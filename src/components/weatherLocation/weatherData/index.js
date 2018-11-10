import React from 'react';
import PropTypes from 'prop-types';

import WeatherExtraInfo from './weatherExtraInfo'
import WeatherTemperature from './weatherTemperature'

import './style.css'

                       //Doble destructuring de un objecto compuesto de otro objecto
const WeatherData = ( { data: { temperature, weatherState, wind, humidity } } ) => {


    return (<div className="weatherDataCont">
        < WeatherTemperature
            temperature={ temperature }
            weatherState={ weatherState }
        />
        < WeatherExtraInfo humidity={ humidity } wind={ wind } />
    </div>)
}

WeatherData.prototype = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default WeatherData;