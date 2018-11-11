import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
//import Snackbar from '@material-ui/core/Snackbar';

import LocationList from './components/locationList'
import ForecastExtended from "./components/forecastExtended"
import './App.css';
import './components/style.css'

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
            message: "¡Bienvenido a mi aplicacción del tiempo hecha en ReactJS con Material UI!",
            openSnackbar: true
        }
    }

    handleSelectedLocation = (city) => {
        console.log("handleSelectedLocation ->" + city)

        this.setState({ city })
    }

    handleSnackbarClose = () => {
        console.log("hgola")
        this.setState({ openSnackbar: false })
    }

    render() {
        const { city } = this.state
        return (
            <div>
            {/*< Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                message={ message }
                open={openSnackbar}
                onClose={this.handleSnackbarClose}
                autoHideDuration={3500}
                disableWindowBlurListener={true}
            />*/}
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

export default App;
