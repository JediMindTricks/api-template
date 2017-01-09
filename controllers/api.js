var Song = require('../models/Songs.js')



// Export the index action to be used in app
module.exports = {
	index: (req, res) => {
		Song.find({}, (err, songs) => {
			if(err) return console.log(err)
				console.log(songs)
			res.json(songs)
		})
	},

	show: (req, res) => {
		// Search the Songs Schema to find songs given in params, or give an error
		Song.findById(req.params.id, (err, song) => {
			// Print out name of song
			res.json(song)
		})
	},

	create: (req, res) => {
		// create a song by passing in the "req.body" to pass the json body of song
		Song.create(req.body, (err, song) => {
			// Song created show messge and print song
			res.json({message: "Song created!", song: song})
		})
	},

	update: (req, res) => {
		// Look up song by ID and update it by finding the params, the body to change
		Song.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, song) => {
			// Send message song was updated then print song
			res.json({message: "The song was updated!", song})
		})
	},

	destroy: (req, res) => {
		Song.findByIdAndRemove(req.params.id, (err) => {
			res.json({message: "Song removed!"})
		})
	}
}