// Places Index Page
//import React and Def functions from default.jsx
const React = require('react');
const Def = require('../default');

//stub function for index
//accepts data paramter from index
function index(data) {
    //formats data into HTML so page can display it
    let placesFormatted = data.places.map((place) => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}></img>
            </div>
        )
    })
    return (
    // Wrapping in Def component
    <Def>
        <main>
            <h1>PLACES INDEX PAGE</h1>
            {/* Displays content of places */}
            {placesFormatted}
        </main>
    </Def>
    )
    
}

// exports index
module.exports = index;