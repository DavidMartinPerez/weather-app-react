import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types'

import LocationList from './components/locationList'
import ForecastExtended from "./components/forecastExtended"
import './App.css';
import './components/style.css'

//Action redux
import { setCity } from './actions'

const cities = [
    "Malaga,es",
    "Zaragoza,es",
    "Madrid,es",
    "Buenos Aires,ar"
]

class App extends Component {

    constructor() {

        super()

        this.state = {
            city: null,
            message: "¡Bienvenido a mi aplicacción del tiempo hecha en ReactJS con Material UI y Redux!",
            openSnackbar: true
        }
    }

    handleSelectedLocation = (city) => {
        this.setState({ city })

        this.props.setCity(city)
    }

    handleSnackbarClose = () => {
        this.setState({ openSnackbar: false })
    }

    render() {
        const { city, message, openSnackbar } = this.state
        return (
            <div>
            {< Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                message={ message }
                open={openSnackbar}
                onClose={this.handleSnackbarClose}
                autoHideDuration={3500}
                disableWindowBlurListener={true}
            />}
            <Grid>
                <Row>
                    <AppBar position='sticky' color="secondary">
                        <Toolbar>
                            <Typography variant='title' color='inherit'>
                                Wheather app
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <LocationList
                            cities={ cities }
                            onSelectedLocation={ this.handleSelectedLocation }
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <Paper elevation={4}>
                            <div className="details">
                                { city ? < ForecastExtended city={ city } /> : <h2 className="forecast-title">Selecciona una ciudad</h2>}
                            </div>
                        </ Paper>
                    </Col>
                </ Row>
            </Grid>
            </div>
        );
    }
}

//PropTypes
App.propTypes = {
    setCity: PropTypes.func.isRequired,
}

//Connect Redux React
//Mapeo de acciones que tenemos para utilizar el store
const mapDispatchToPropsActions = (dispatch) => ({
    setCity: value => dispatch(setCity(value))
})
const AppConnected = connect(null, mapDispatchToPropsActions)(App)

export default AppConnected;