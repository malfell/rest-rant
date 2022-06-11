//import React and Def functions from default.jsx
const React = require('react');
const Def = require('./default');

//stub function for home

function home () {
    return (
        // wraps home code in component from Def function
        <Def>
            <main>
                <h1>Rest-RANT</h1>
                {/* Fruit Drink Image */}
                <div>
                    <img src='/images/chia-fruit-drink.jpg' alt='Chia Fruit Shake'/>
                    <div>
                        Photo by <a href='https://unsplash.com/@cravethebenefits'>Brenda Godinez</a> on <a href='https://unsplash.com'>Unsplash</a>
                    </div>
                </div>
                <a href='/places'>
                    {/* In JSX uses className instead of class */}
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>

        </Def>
    )
}

//exports home function
module.exports = home