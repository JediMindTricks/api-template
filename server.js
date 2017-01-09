var express = require('express'),
app = express(),
mongoose = require('mongoose'),
logger = require('morgan'),
bodyParser = require('body-parser'),
apiRoutes = require('./routes/api.js')


// connect the app to the mongo database
mongoose.connect('mongodb://localhost/song-tribe', (err) => {
	// Log errors if any or success
	console.log(err || "Connected to Mongo Database (song-tribe)")
})

// Add middleware() that will run after a request, but before response
app.use(logger('dev'))
app.use(bodyParser.json())


// create a route for home
// app.use('/', apiRoutes)
// create a route for songs
app.use('/songs', apiRoutes)

app.listen(3000, (err) => {
	console.log(err || "Server is running correctly on localhost:3000")
})