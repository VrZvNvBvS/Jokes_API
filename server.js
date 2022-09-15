const express = require("express");
const app = express();
const PORT = 8000;


app.use(express.json(), express.urlencoded({ extended: true }));
// ************ Implement Middle Ware **************************

// fire mongoose.connect statement in order to initialize the MONGO DB connection
require("./server/config/mongoose.config");

// import CLIENT-side routes
const JokesRoutes = require("./server/routes/joke.routes");
JokesRoutes(app);


app.listen(PORT, () => console.log(`Listening on Port: ${PORT} `));