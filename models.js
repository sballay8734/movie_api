const mongoose = require('mongoose');

// movie schema
let movieSchema = mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  genre: {
    name: String,
    description: String
  },
  director: {
    name: String,
    bio: String,
    birth: String,
    death: String,
  },
  imagePath: String,
  featured: Boolean
});

// user schema
let userSchema = mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
  birthDate: Date,
  favoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});

let Movie = mongoose.model('Movie', movieSchema); // accessed as "movies"
let User = mongoose.model('User', userSchema); // accessed as "users"

module.exports.Movie = Movie;
module.exports.User = User;