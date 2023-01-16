// import model methods
const models = require('../models');

// there is only one MODEL - 'movies' - for these controllers to interact with

// attach methods to the modules.exports obj
module.exports = {

  get: (req, res) => {
    // wraps a model method
    // is only 'getting' so does not need to forward the req
    models.retrieveAll((err, data) => {
      if (err) {
        console.log('GET error');
        res.sendStatus(404);
      } else {
        res.statusCode = 200;
        res.send(data);
      }
    });
  },

  // do not need methods for SEARCH or WATCHED because they are client-side, state-based interactions!!

  post: (req, res) => {
    // wraps a model method
    // needs to forward the req so an item can be added
    models.create(req.body, (err, data) => {
      if (err) {
        console.log('POST error');
        res.sendStatus(400);
      } else {
        res.sendStatus(201);
      }
    });
  },

  // SOME DAY
  put: (req, res) => {
    console.log('======================');
    // wraps a model method
    // needs to forward the req so an item can be updated
    if (req.body.watched) req.body.watched = 0;
    else req.body.watched = 1;

    models.update(req.body, (err, data) => {
      if (err) {
        consol.log('PUT (update) error');
        res.sendStatus(404);
      } else {
        res.send(data);
      }
    });
  }

  // delete: (req, res) => {
  //   // wraps a model method
  //   // needs to forward the req so an item can be deleted
  //   models.delete(req.body, (err, data) => {
  //     if (err) {
  //       console.log('DELETE error');
  //       res.sendStatus(404);
  //     } else {
  //       res.send(data);
  //     }
  //   })
  // }

};
