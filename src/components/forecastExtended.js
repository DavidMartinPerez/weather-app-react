import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from '../../node_modules/@material-ui/core';

import ForecastItem from './forecastItem';
import './style.css'
import getUrlWeatherForeCast from '../services/getUrlWeatherForeCast';
import transformForecast from '../services/transformForecast';

class ForecastExtended extends Component {

    constructor() {
        super();

        this.state ={
            forecastData: null,
            days: null
        }
    }



    renderForecastItemDays() {

        const { forecastData } = this.state;

        let result = null;

        if(forecastData != null){
            result = forecastData.map( forecast => (
                < ForecastItem
                    weekDay={ forecast.weekDay }
                    data={ forecast.data }
                    hour={ forecast.hour }
                    key={ `${forecast.weekDay}_${forecast.hour}` }
                    />)
            )
        }else{
            result = <div className="centerLoading">< CircularProgress size={50} /></div>
        }

        return result

    }

    updateCity = city => {

        fetch(getUrlWeatherForeCast(city)).then(
            data => (data.json())
        ).then(
            weather_data => {
                const data = transformForecast(weather_data)

                this.setState({ forecastData: data })
            }
        )

    }

    componentDidMount() {

        this.updateCity(this.props.city)

    }

    componentWillReceiveProps(nextProps) {
        //Se ejecuta cuando haya un cambio de en el props
        if(nextProps.city !== this.props.city){

            this.setState({ forecastData: null })

            this.updateCity(nextProps.city)
        }
    }

    render() {
        const { city } = this.props

        return(
            <div>
                <h2 className="forecast-title">
                    Pronóstico extendido para { city }
                </h2>
                <div className="forecast-list">
                    { this.renderForecastItemDays() }
                </div>
            </div>
        )
    }

}

ForecastExtended.propTypes ={
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;