const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movielistmongo');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    lowercase: true
  },
  added: Date,
  watched: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 0
  }
});

const Movie = mongoose.model('Movie', movieSchema);

const retrieveAll = () => {
  console.log('hit retrieveAll in db.js');
  return Movie.find({});
};

const addOrFix = (movie) => {
  // all the potential props
  let {title, added, watched, rating} = movie;
  // arg1: LOOK FOR ME
  // arg2: add/updated all of these once you find arg1
  
  return Movie.updateOne({title}, {title, added, watched, rating}, {upsert: true});
};

module.exports.retrieveAll = retrieveAll;
module.exports.addOrFix = addOrFix;