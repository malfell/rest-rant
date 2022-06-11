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
                {/* form info will be sent to /places */}
                <form method='POST' action='/places'>
                    {/* PLACE NAME */}
                    {/* Remember className instead of class for jsx */}
                    <div className='form-group'>
                        {/* JSX requires the 'for' attribute to be written as 'htmlFor' */}
                        <label htmlFor='name'>Place Name</label>
                        <input className='form-control' id='name' name='name' required />
                    </div>
                    {/* PLACE PICTURE */}
                    <div className='form-group'>
                        <label htmlFor='pic'>Place Picture</label>
                        <input className='form-control' type='url' id='pic' name='pic' />
                    </div>
                    {/* CITY */}
                    <div className='form-group'>
                        <label htmlFor='city'>City</label>
                        <input className='form-control' id='city' name='city' />
                    </div>
                    {/* STATE */}
                    <div className='form-group'>
                        <label htmlFor='state'>State</label>
                        <input className='form-control' id='state' name='state' />
                    </div>
                    {/* CUISINES */}
                    <div className='form-group'>
                        <label htmlFor='cuisines'>Cuisines</label>
                        <input className='form-control' id='cuisines' name='cuisines' required />
                    </div>
                    {/* SUBMIT BUTTON */}
                    <input className='btn btn-primary' type='submit' value='Add Place' />

                </form>
            </main>
        </Def>
    )
}

//exporting new form
module.exports = newForm