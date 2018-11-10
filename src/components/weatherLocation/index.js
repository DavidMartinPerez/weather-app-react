import React from 'react';

import WeatherExtraInfo from './weatherExtraInfo'
import WeatherTemperature from './weatherTemperature'
import { RAIN } from '../../constans/weathers'

const WeatherData = () => (
    <div>
        < WeatherTemperature
            temperature={ 20 }
            weatherState={ RAIN }
        />
        < WeatherExtraInfo humidity={ 80 } wind={ "10 m/s" } />
    </div>
)

export default WeatherData;