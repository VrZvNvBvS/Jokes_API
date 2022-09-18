const mongoose = require("mongoose");
const DATABASE_NAME = "jokesDB"


mongoose.connect(MONGO_url + DATABASE_NAME, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log(" Successfully connected to database "))

	.catch(err => console.log(` Error: Check db connection `, err));
