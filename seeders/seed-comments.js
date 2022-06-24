//require models database
const db = require('../models');

// To use await, we need async function
async function seed() {
    //Get the place, H-Thai-ML
    //need to know ID of a place before leaving a comment
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    // Create fake sample comment
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommend!'
    })

    let comment1 = await db.Comment.create({
        author: 'Hungry Harold',
        rant: true,
        stars: 0,
        content: 'Hate this place. >:( '
    })

    // Add comment to place's comment array
    place.comments.push(comment.id, comment1.id)

    // save the place now that it has comment
    await place.save()

    // Exit program
    process.exit()
}

seed()