const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: true,
		minlength: 10
	},
	punchline: {
		type: String,
		required: true,
		minlength: 3
	}
}, {timestamps: true});
// will generate values for CreatedAt && UpdatedAt


const Joke = mongoose.model("Joke", JokeSchema);
// wired to models

module.exports = Joke;