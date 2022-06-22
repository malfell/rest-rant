//import React and Def component from default.jsx
const React = require('react');
const Def = require('../default');

//function for new form
//pass in data to create error message
function newForm (data) {
    // ERROR MESSAGE
    let message = ''
        if(data.message) {
            message = (
                <h4 className='alert-danger'>
                    {data.message}
                </h4>
            )
        }

    return (
        // Def component as wrapper again
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {/* error message will only be displayed if there's error */}
                {message}
                {/* form info will be sent to /places */}
                <form method='POST' action='/places'>
                    {/* PLACE NAME */}
                    {/* Remember className instead of class for jsx */}
                    <div className='form-group'>
                        {/* JSX requires the 'for' attribute to be written as 'htmlFor' */}
                        <label htmlFor='name'>Place Name</label>
                        <input className='form-control' id='name' name='name' required />
                    </div>
                    {/* FOUNDED DATE */}
                    <div className='form-group'>
                        <label for='founded'>Founded Year</label>
                        <input 
                            //only numbers allowed!
                            type='number'
                            className='form-control' 
                            id='founded' 
                            name='founded'
                            //checks date to be a year
                            value={new Date().getFullYear} />
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
                        <input className='form-control' list='state-list' id='state' name='state' />
                            <datalist id="state-list">
                                <option value="AK">Alaska</option>
                                <option value="AL">Alabama</option>
                                <option value="AR">Arkansas</option>
                                <option value="AZ">Arizona</option>
                                <option value="CA">California</option>
                                <option value="CT">Connecticut</option>
                                <option value="CO">Colorado</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="IA">Iowa</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="MA">Massachussets</option>
                                <option value="MD">Maryland</option>
                                <option value="ME">Maine</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MO">Missouri</option>
                                <option value="MS">Mississippi</option>
                                <option value="MT">Montana</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="NE">Nebraska</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NV">Nevada</option>
                                <option value="NY">New York</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OH">Ohio</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VA">Virginia</option>
                                <option value="VT">Vermont</option>
                                <option value="WA">Washington</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WV">West Virginia</option>
                                <option value="WY">Wyoming</option>
                            </datalist>
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