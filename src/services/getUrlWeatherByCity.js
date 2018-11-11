import { api_key, url_base_weather } from '../constans/api_url'

const getUrlWeatherByCity = ( city ) => {

    let api_weather

    if(city != null){

        api_weather = `${url_base_weather}?q=${city}&appid=${api_key}`

    }

    return api_weather;
}

export default getUrlWeatherByCity;