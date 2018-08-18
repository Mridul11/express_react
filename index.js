const express = require('express');
const config = require('./config/config');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profiles = require('./routes/api/profiles');

const app = express();

//DB config...
const db = require('./config/keys').mongodbURI;

//connect to mongoose..
mongoose.connect(db)
        .then(() => console.log("mongodb connected."))
        .catch(err => console.log(err));

app.get('/', function(req,res){
    res.send("server is running");
});


app.use('/api/users', users);
app.use('/api/profiles', profiles);
app.use('/api/posts', posts);

app.listen(config.port, () => console.log(`server is running ${config.port}`));