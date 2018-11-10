import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

const WeatherTemperature = ( { temperature, weatherState } ) => (
    <div>
        <WeatherIcons name={getWeatherIcons(weatherState)} size="2x" />
        <span>{ `${temperature} Cº` }</span>
    </div>
)


const icons = {
    default: "day-sunny",
    cloud: "cloud",
    cloudy: "cloudy",
    sun: "day-sunny",
    rain: "rain",
    snow: "snow",
    fog: "day-fog",
    windy: "windy"
}

let getWeatherIcons = ( temporary ) => {

    let icon = icons[temporary];

    if ( !icon ) icon = icons.default;

    return icon;

}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;