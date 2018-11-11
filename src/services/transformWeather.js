
import convert from 'convert-units';

import { SUN, CLOUDY, RAIN, THUNDER, DRIZZLE, SNOW } from './../constans/weathers'


const getTemp = kelvin => {
    let temp = convert(kelvin).from("K").to("C").toFixed(0)

    return temp;
}

const getWeatherState = weather_data => {
    let resultado = SUN;

    let { id } = weather_data

    if( id < 300 ) resultado = THUNDER
    else if( id < 400 ) resultado = DRIZZLE
    else if( id < 600 ) resultado = RAIN
    else if( id < 700 ) resultado = SNOW
    else if( id < 800 ) resultado = SUN
    else if( id < 900 ) resultado = CLOUDY

    return resultado;
}

const transforWeather = weather_data => {
    const { name } = weather_data;
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperature = getTemp(temp)

    let data = {
        name,
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`
    }

    return data;
}

export default transforWeather;