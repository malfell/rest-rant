//import React and Def component from default.jsx
const React = require('react');
const Def = require('../default');

//function for new form
function newForm () {
    return (
        // Def component as wrapper again
        <Def>
            <main>
                <h1>Add a New Place</h1>
            </main>
        </Def>
    )
}

//exporting new form
module.exports = newForm