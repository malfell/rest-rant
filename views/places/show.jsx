const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            {/* Pretty this up later. 
            Refer to Rest-Rant Part 6, Step 3 */}
            <h1> {data.place.name} </h1>
            <div>
                <img src={data.place.pic} alt={data.place.name}></img>
            </div>
            <div>
                <h3>Rating</h3>
                <p>Not rated</p>
            </div>
            <div>
                <h3>Description</h3>
                <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
            </div>
            <div>
                <h3>Comments</h3>
                <p>No comments yet! No one cares!</p>
            </div>
            {/* BUTTONS */}
            <div>
                {/* EDIT BUTTON */}
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>
                {/* DELETE BUTTON (needs form) */}
                <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>
                        Delete
                    </button>
                </form>
            </div>
          </main>
        </Def>
    )
}

module.exports = show
