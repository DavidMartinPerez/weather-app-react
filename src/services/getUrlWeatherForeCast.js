import { api_key, url_base_forecast } from '../constans/api_url'

const getUrlWeatherForeCast = ( city ) => {

    let api_weather

    if(city != null){

        api_weather = `${url_base_forecast}?q=${city}&appid=${api_key}`

    }

    return api_weather;
}

export default getUrlWeatherForeCast;