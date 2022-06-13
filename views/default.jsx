// Template/default view
//Will have the info that every page has

//import react
const React = require('react');

//gets current year with Javascript Dynamic Date
let currentYear = new Date().getFullYear();

//stub function for HTML template
function Def (html) {
    // return's first paranthesis must always share the same line
    return (
        <html>
            <head>
                <title>Rest-RANT</title>
                {/* Bootstrap CDN link */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
                <link rel='stylesheet' href='/css/style.css'/>

               </head>
            <body>
                {/* NAV BAR */}
                <nav>
                    {/* NAV LINKS */}
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/places'>Places</a>
                        </li>
                        <li>
                            <a href='/places/new'>Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
            <footer>
                <p class='footerText'><b>This is a footer test.</b> It can have links! Except it doesn't now. It's just a sticky footer.</p>
                <p class='footerText'>Copyright ME 2022-{currentYear}&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>&nbsp;Fancy dyanamic date! Come back next year to see it change. 
                 </p>
            </footer>
        </html>
    );

};

//exports the HTML that is returned by the Def function
module.exports = Def 