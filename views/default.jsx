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
                {/* Bootstrap CDN link */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
                <link rel='stylesheet' href='/css/style.css'/>
            </head>
            <body>
                {html.children}
            </body>

        </html>
    );

};

//exports the HTML that is returned by the Def function
module.exports = Def 