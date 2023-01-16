const db = require('../db')

// there is only one CONTROLLER - 'movies' - for this model to interact with

// attach methods to the modules.exports obj
module.exports = {
  // need to query the database in each method

  retrieveAll: callback => {
    console.log('\nGET got here\n');

    // query the database
    db.query(
      `SELECT * FROM movies`,
      (err, res) => {
        err? callback(err) : callback(null, res);
      }
    );
  },

  // do not need methods for SEARCH or WATCHED because they are client-side, state-based interactions!!

  create: (req, callback) => {
    console.log('\nPOST got here\n');

    db.query(
      `INSERT INTO movies (title) VALUES ('${req.title}')`,
      (err) => {
        err ? callback(err)
            : callback(null, console.log(`Added '${req.title}' to movielist.`));
      }
    );
  },

  // SOME DAY
  update: (req, callback) => {
    console.log('\nPUT got here\n', );

    db.query(
      `UPDATE movies SET watched = '${req.watched}' WHERE id = ${req.id}`,
      (err) => {
        err ? callback(err)
            : callback(null, console.log(`Toggled '${req.title}''s status to '${req.watched}'`));
      }
    );
  }

  // delete: (req, callback) => {
  //   console.log('\nDELETE got here\n');

  //   db.query(

  //   );
  // }

}