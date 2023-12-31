const express = require('express');
const controllers = require('./controllers');
const router = express.Router();

// assign methods to the router that correspond to the correct controller(s)
router.get('/movies', controllers.get);
router.post('/movies', controllers.post);
router.put('/movies', controllers.put);

// OVERTHINKING IT FOR SOME OTHER DAY
// router.delete('/movies', controllers.delete);

module.exports = router;
