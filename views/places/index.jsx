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
            <div className='col-sm-6'>
                <h2>
                    <a href={`/places/${place.id}`}>
                        {place.name}
                    </a>
                    
                </h2>
                {/* Text was centered right in the example */}
                <p className='text-right'>
                    {place.cuisines}
                </p>
                <div>
                    <img src={place.pic} alt={place.name}></img>
                </div>
                <p className='text-right'>
                    Located in {place.city}, {place.state}
                </p>
                
            </div>
        )
    })
    return (
    // Wrapping in Def component
    <Def>
        <main>
            <h1>Places to Rant or Rave About</h1>
            {/* Displays content of places */}
            <div className='row'>
                {placesFormatted}  
            </div>
            
        </main>
    </Def>
    )
    
}

// exports index
module.exports = index;