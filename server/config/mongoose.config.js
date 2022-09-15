const mongoose = require("mongoose");
const DATABASE_NAME = "jokesDB"


mongoose.connect("mongodb+srv://Random:1234567890@supervirgo.m337wu3.mongodb.net/jokesDB?retryWrites=true&w=majority" + DATABASE_NAME, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log(" Successfully connected to database "))

	.catch(err => console.log(` Error: Check db connection `, err));