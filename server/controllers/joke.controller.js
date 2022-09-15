
const Joke = require("../models/joke.model");

// create

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(
            newlyCreatedJoke => res.json({ 
                joke: newlyCreatedJoke,
                message: "Success: Created a Joke"
            })
        )
        .catch(
            err => res.json({ 
                message: "Create was not successful ",
                error: err 
            })
        );
    };

// retrieve
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then( allJokes => 
            res.json({
                jokes: allJokes,
                message: " Success: Found All Jokes "
            })
        )
        .catch( err =>
            res.json({
                message: " Error: Unable to Find All Jokes ",
                error: err
            })
        )
};

module.exports.findOneJoke = (req, res) => {
    Joke.findById(req.params.id)
        .then(
            aJoke => res.json ({
                joke: aJoke,
                message: " Success: Found a Joke "
            })
        )
        .catch( err =>
            res.json({
                message: " Error: Unable to Find a Joke ",
                error: err
            })
        )
};

// update

module.exports.updateJoke = (req,res) => {
    Joke.findByIdAndUpdate( req.params.id, req.body, 
        { new: true, runValidators: true })
        .then(
            updatedJoke => res.json({
                joke: updatedJoke,
                message: " Success: Update a Joke "
            })
        )
        .catch( err =>
            res.json({
                message: " Error: Unable to Update a Joke ",
                error: err
            })
        )
};

// delete
module.exports.deleteOneJoke = (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
        .then(
            result => res.json ({
                result: result,
                message: " Success: Deleted a Joke "
            })
        )
        .catch( err =>
            res.json({
                message: " Error: Unable to Delete a Joke ",
                error: err
            })
        )
};