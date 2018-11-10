import React from 'react';
import PropTypes from 'prop-types';

import './style.css'

const Location = ( { city } ) => {
    // Destructuring
    //const { city } = props;

    //Forma estándar
    //const city = props != null ? props.city : 'Mordor';


    return (
        <div className="locationCont">
            <h2>{ city }</h2>
        </div>
    )

};

Location.prototype = {
    city: PropTypes.string.isRequired,
}

export default Location;