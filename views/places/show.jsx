const React = require('react')
const Def = require('../default')

function show (data) {
    // Comments Variable
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    // Rating Variable
    let rating = (
        <h3 className='inactive'>
            Not yet rated
        </h3>
    )
    // Logic for showing comments
    if(data.place.comments.length) {
        // Calculations for average rating
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        {/* Math.round to make it a whole number */}
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        // For loop for showing the correct number of stars
        //holds the stars
        let stars = ''
        //for loop
        for(let i = 0; i < averageRating; i++){
            stars += '⭐'
        }
        rating = (
            <h3>
                {/*Shows the number of star emojis*/}
                {stars} stars
            </h3>
        )
        // Shows comments ⭐
        comments = data.place.comments.map(c => {
            return (
                // gives rants a border and places them in small columns
                <div className='border col-sm-4'>
                    <h2 className='rant'>{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }

    return (
        <Def>
          <main>
            {/* Pretty this up later. 
            Refer to Rest-Rant Part 6, Step 3 */}

            <div className='row'>
                {/* PICTURE */}
                <div className='col-sm-6'>
                    <img src={data.place.pic} alt={data.place.name}></img>
                    {/* CITY AND STATE */}
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
                </div>

                <div className='col-sm-6'>
                    {/* PLACE NAME */}
                    <h1> {data.place.name} </h1>

                    {/* RATING */}
                    <div>
                        <h2>Rating</h2>
                        {rating}
                        <br/>
                    </div>

                    <div>
                        {/* DESCRIPTION */}
                        <h2>Description</h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                    </div>

                        {/* BUTTONS */}
                        <div className='editDeleteButtons'>
                            {/* EDIT BUTTON */}

                            <a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>
                            {/* Pencil icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                </svg>
                                
                                Edit
                            </a>

                            {/* DELETE BUTTON (needs form) */}
                            <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
                                <button type='submit' className='btn btn-danger'>
                                    {/* trash icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                                    Delete
                                </button>
                            </form>
                        </div>

                </div>

                
            </div>



            {/* COMMENTS */}
            <hr />
            {/* ORGANIZE COMMENTS BETTER */}
            <div>
                <h2>Comments</h2>
                {comments}
            </div>
            {/* ADD NEW COMMENT FORM */}    
            <div>
                <form method='POST' action={`/places/${data.place.id}/comment`}>
                    {/* CONTENT */}
                    <div className='form-group'>
                        <label htmlFor='content'>Content</label>
                        <br/>
                        <textarea rows='3' cols='150' name='content' 
                        id='content' placeholder='Begin rant or rave...'>
                        </textarea>
                    </div>                    
                    <br/>
                    <div className='row'>
                        {/* AUTHOR */}
                        <div className='form-group col'>
                            <label htmlFor='author'>Author</label>
                            <input className='form-control' type='text' id='author' name='author' />
                        </div>
                        {/* SPACING IS WEIRD HERE */}
                        {/* STAR RATING */}
                        <div className='form-group col'>
                            <label htmlFor='stars'>Star Rating</label>
                            <input type='range' 
                                    id='stars' 
                                    name='stars' 
                                    step='0.5' 
                                    min='0' max='5'></input>
                        </div>
                        {/* RANT */}
                        <div className='form-group col'>
                            <label htmlFor='rant'>Rant? </label>
                            <input type='checkbox' id='rant' name='rant' />
                        </div>
                    </div>

                    
                    {/* SUBMIT */}
                    <div>
                    <input className='btn btn-primary' type='submit' value='Add Comment' />
                    </div>

                </form>

            </div>
            
          </main>
        </Def>
    )
}

module.exports = show
