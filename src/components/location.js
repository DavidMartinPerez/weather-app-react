import React from 'react';
import PropTypes from 'prop-types';

const Location = ( { city } ) => {
    // Destructuring
    //const { city } = props;

    //Forma estándar
    //const city = props != null ? props.city : 'Mordor';


    return (
        <div>
            <h2>{ city }</h2>
        </div>
    )

};

Location.prototype = {
    city: PropTypes.string.isRequired,
}

export default Location;