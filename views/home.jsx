//import React and Def functions from default.jsx
const React = require('react');
const Def = require('./default');

//stub function for home

function home () {
    return (
        // wraps home code in component from Def function
        <Def>
            <main>
                <h1>HOME</h1>
            </main>

        </Def>
    )
}

//exports home function
module.exports = home