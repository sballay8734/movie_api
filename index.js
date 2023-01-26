// Imports *********************************************************************
const express = require('express'),
  bodyParser = require('body-parser'),
  uuid = require('uuid'),
  mongoose = require('mongoose'),
  Models = require('./models.js'),
  { check, validationResult } = require('express-validator')

// Middleware ******************************************************************
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const Movies = Models.Movie;
const Users = Models.User;

mongoose.connect('mongodb://localhost:27017/myFlixDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

let auth = require('./auth')(app);

// CORS Stuff
const cors = require('cors');
let allowedOrigins = ['http://localhost:8080', 'http://testsite.com'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      let message = 'The CORS policy for this application doesn\'t allow access from origin ' + origin;
      return callback(new Error(message), false);
    }

    return callback(null, true);
  }
}));

const passport = require('passport');
require('./passport');

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Main url
app.get('/', (req, res) => {
  res.send('Welcome to my movie API!')
});

// Get all users
app.get('/users', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.find()
    .then((users) => {
      res.status(201).json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });

});

// Get all movies --------------------------------------------------------------
app.get('/movies', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.find()

    .then((movies) => {
      res.status(201).json(movies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err)
    });

});

// Get a user by username ------------------------------------------------------
app.get('/users/:username', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.findOne({ username: req.params.username })

    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });

});

// update user info ------------------------------------------------------------
app.put('/users/:username',
  [
    check('username', 'Username is required').isLength({ min: 5 }),
    check('username', 'Username contains non-alphanumeric characters - Not Allowed').isAlphanumeric(),
    check('password', 'Password is required').not().isEmpty(),
    check('email', 'Email does not appear to be valid').isEmail()

  ], passport.authenticate('jwt', { session: false }), (req, res) => {
    Users.findOneAndUpdate(
      { username: req.params.username },
      {
        $set:
        {
          // Leaving any of these fields out is still valid. Existing values will remain unchanged. So if you just wanted to update the username, you may do so by only providing a username in the req.body. All other fields will be untouched. 
          // HOWEVER, if you leave req.body blank, it will delete everything.
          username: req.body.username,
          password: req.body.password,
          email: req.body.email,
          birthDate: req.body.birthDate,
        }
      },
      { new: true }, // makes sure updated document is returned

      // error handling & feedback
    ).then((updatedUser) => {
      res.json(updatedUser);
    })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Error: ' + error);
      });

  });

// add movies to user list of favorites ----------------------------------------
app.post('/users/:username/movies/:movieID', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.findOneAndUpdate(
    { username: req.params.username },
    { $addToSet: { favoriteMovies: req.params.movieID } },
    { new: true },

  ).then((updatedUser) => {
    res.status(201).json(updatedUser);
  }).catch((error) => {
    console.error(error);
    res.status(500).send('Error: ' + error);
  });

});

// remove movie from user list of favorites ------------------------------------
app.delete('/users/:username/movies/:movieID', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.findOneAndUpdate(
    { username: req.params.username },
    { $pull: { favoriteMovies: req.params.movieID } },
    { new: true },

  ).then((updatedUser) => {
    res.status(201).json(updatedUser);
  }).catch((error) => {
    console.error(error);
    res.status(500).send('Error: ' + error);
  });

});

// Get movie by title ----------------------------------------------------------
app.get('/movies/:movieName', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.findOne(
    { title: req.params.movieName }).collation({ locale: "en", strength: 2 })

    .then((movie) => {
      if (!movie) {
        res.status(400).send(req.params.movieName + ' could not be found.')
      } else {
        res.status(201).json(movie);
      }
    }).catch((error) => {
      console.error(error);
      res.status(500).send('Error: ' + error);
    });

});

// Register new user -----------------------------------------------------------
app.post('/users',
  // Validation logic
  [
    check('username', 'Username is required').isLength({ min: 5 }),
    check('username', 'Username contains non-alphanumeric characters - not allowed.').isAlphanumeric(),
    check('password', 'Password is required').not().isEmpty(),
    check('Email', 'Email does not appear to be valid').isEmail()

  ], (req, res) => {

    // check validation object for errors
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    // hash password
    let hashedPassword = Users.hashedPassword(req.body.Password);

    // check if username already exists
    Users.findOne({ username: req.body.username })

      .then((user) => {
        if (user) {
          return res.status(400).send(req.body.username + ' already exists');
        } else {
          // create new user
          Users.create({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
            birthDate: req.body.birthDate,
          })
            // send feedback(response) back to client - contains status and object
            .then((user) => { res.status(201).json(user) })
            // catch error from create command
            .catch((error) => {
              console.error(error);
              res.status(500).send('Error in create function: ' + error);
            })
        }
      })
      // catch error for post command
      .catch((error) => {
        console.error(error);
        res.status(500).send('Error: ' + error);
      });

  });

// Delete a user by username ---------------------------------------------------
app.delete('/users/:username', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.findOneAndRemove(
    { username: req.params.username })

    .then((user) => {
      if (!user) {
        res.status(400).send(req.params.username + ' was not found.');
      } else {
        res.status(201).send(req.params.username + ' was deleted.')
      }
    }).catch((error) => {
      console.error(error);
      res.status(500).send('Error: ' + error);
    });

});

// Get description of genre by name --------------------------------------------
app.get('/movies/genres/:genreName', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.findOne(
    { "genre.name": req.params.genreName }).collation({ locale: "en", strength: 2 })

    .then((movie) => {
      if (!movie) {
        res.status(400).send(req.params.genreName + ' could not be found.');
      } else {
        res.status(201).json(movie.genre.description);
      }
    }).catch((error) => {
      console.error(error);
      res.status(500).send('Error: ' + error);
    });

});

// Get description of director by name -----------------------------------------
app.get('/movies/directors/:directorName', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.findOne(
    { "director.name": req.params.directorName }).collation({ locale: "en", strength: 2 })

    .then((movie) => {
      if (!movie) {
        res.status(400).send(req.params.directorName + ' could not be found.');
      } else {
        res.status(201).json(movie.director);
      }
    }).catch((error) => {
      console.error(error);
      res.status(500).send('Error: ' + error);
    });

});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0', () => {
  console.log('Listening on port ' + port);
});