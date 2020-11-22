var express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();
var app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb+srv://EdifiUser:oski@edifi.v0mq7.mongodb.net/edifi?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const educatorsRouter = require('./routes/educators');
const speakersRouter = require('./routes/speakers');

app.use('/educators', educatorsRouter);
app.use('/speakers', speakersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
