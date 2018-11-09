import React, { Component } from 'react';
import WeatherLocation from './components/weatherLocation'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">

                Wheather app (Aplicación del tiempo)

                <WeatherLocation />

            </div>
        );
    }
}

export default App;
