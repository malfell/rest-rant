// Error page
//import React and Def from default.jsx
const React = require('react');
const Def = require('./default');

//create error404 stub function
function error404 () {
    return(
        // Using Def component as a wrapper
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    )

}

//export error404 function
module.exports = error404;