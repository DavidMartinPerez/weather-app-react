import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './style.css'

const WeatherTemperature = ( { temperature, weatherState } ) => (
    <div className="weatherTemperatureCont">
        <WeatherIcons className="wicon" name={getWeatherIcons(weatherState)} size="2x" />
        <span className="temperature">{ `${temperature}` }</span>
        <span className="temperatureType">Cº</span>
    </div>
)


const icons = {
    default: "day-sunny",
    cloud: "cloud",
    cloudy: "cloudy",
    rain: "rain",
    windy: "windy",
    snow: "snow",
    thunder: "day-thunderstorm",
    drizzle: "day-showers",
}

let getWeatherIcons = ( temporary ) => {

    let icon = icons[temporary];

    if ( !icon ) icon = icons.default;

    return icon;

}

WeatherTemperature.propTypes = {
    temperature: PropTypes.string.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;