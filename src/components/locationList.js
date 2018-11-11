//Componente funcional

import React from 'react';
import PropTypes from 'prop-types'
import WeatherLocation from './weatherLocation';
import "./style.css"

const LocationList = ( { cities, onSelectedLocation } ) => {

    const handleWeatherLocationClick = ( city ) => {
        onSelectedLocation(city)
    }

    const allWeatherLocationComponents = cities => (
        cities.map( (city) =>
            (
                <WeatherLocation
                    key = { city }
                    city = { city }
                    onWeatherLocationClick = { () => handleWeatherLocationClick( city ) }
                />
            )
        )
    )

    return (
        <div className="locationList">
            { allWeatherLocationComponents(cities) }
        </div>
    )
}


LocationList.prototype = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired,
}
export default LocationList;