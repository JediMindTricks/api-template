var express = require('express'),
apiRouter = express.Router(),
apiController = require('../controllers/api.js')

// create an index route
apiRouter.get('/', apiController.index)

// create a post request
apiRouter.post('/', apiController.create)

apiRouter.get('/:id', apiController.show)

apiRouter.patch('/:id', apiController.update)

apiRouter.delete('/:id', apiController.destroy)

// export the router to be called on server.js
module.exports = apiRouter

