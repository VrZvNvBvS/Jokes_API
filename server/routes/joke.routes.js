const JokeController = require("../controllers/joke.controller");
const Joke = require("../models/joke.model");

// CRUD Ops
module.exports = app => {
    // create
    app.post("/api/jokes/new", JokeController.createNewJoke);

    // retrieve
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/:id", JokeController.findOneJoke);

    // update
    app.put("/api/jokes/update/:id", JokeController.updateJoke);

    // delete
    app.delete("/api/jokes/delete/:id", JokeController.deleteOneJoke);
}