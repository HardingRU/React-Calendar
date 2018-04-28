const express = require('express');
const eventsController = require('../controllers/eventsController');

const eventRoutes = express.Router();


eventRoutes.post('/', eventsController.addEvent);

//postRoutes.put('/:id', postsController.editUser);
//postRoutes.delete('/:id', postController.deleteUser);

module.exports = eventRoutes;
