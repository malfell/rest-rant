// Template/default view
//Will have the info that every page has

//import react
const React = require('react');

//stub function for HTML template
function Def (html) {
    // return's first paranthesis must always share the same line
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>

        </html>
    );

};

//exports the HTML that is returned by the Def function
module.exports = Def 