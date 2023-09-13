require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT;

// Connect to MongoDB (you'll need to provide your own MongoDB URI)
mongoose.connect(process.env.MONGOURL,
    { useNewUrlParser: true })
    .then(() => console.log("MongoDB is Connected"))
    .catch((err) => console.log(err.message))


app.use(express.json());
const routes = require("./routes/routes");
app.use("/", routes);


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
