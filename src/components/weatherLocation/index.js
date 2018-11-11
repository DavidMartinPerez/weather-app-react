import React, { Component } from 'react'
import { CircularProgress } from '@material-ui/core'
//import PropTypes from 'prop-types'

import Location from './location'
import WeatherData from './weatherData'
import transforWeather from './../../services/transformWeather'
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
import { SUN } from '../../constans/weathers'

import './style.css'

const dataError = {
    temperature: -37,
    weatherState: SUN,
    humidity: 100,
    wind: "999 m/s"
}


class WeatherLocation extends Component{

    constructor(props) {
        super(props);

        const { city } = props;

        this.state = {
            city,
            data: null
        }

    }

    componentDidMount() {
        this.handleUpdate()
    }

    componentDidUpdate(prevProps, prevState) {
        //Solo se ejecuta cuando hay una actualizacion
    }


    handleUpdate = () => {

        let { city } = this.state;

        let api_weather = getUrlWeatherByCity(city)

        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( data => {

            const newWeater = transforWeather(data);

            this.setState({
                data: newWeater
            })

        }).catch( err => {

            this.setState({
                data: dataError,
                city: "Error en el Servidor..."
            })

        })
    }

    render(){
        const { onWeatherLocationClick } = this.props
        const { data, city } = this.state

        return (
            <div className="weatherLocationCont" onClick={ onWeatherLocationClick }>
                { data ? < Location city={ city } /> : <h1>Cargando..</h1> }
                { data ? < WeatherData data={ data } /> :  < CircularProgress size={50} /> }
            </div>
        )
    }

}

export default WeatherLocation;
