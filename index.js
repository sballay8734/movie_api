const express = require('express'),
  bodyParser = require('body-parser'),
  uuid = require('uuid'),
  mongoose = require('mongoose'),
  Models = require('./models.js')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const Movies = Models.Movie;
const Users = Models.User;

mongoose.connect('mongodb://localhost:27017/myFlixDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Get all users
app.get('/users', (req, res) => {
  Users.find()
    .then((users) => {
      res.status(201).json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

// Get a user by username ------------------------------------------------------
app.get('/users/:username', (req, res) => {
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
app.put('/users/:username', (req, res) => {
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
app.post('/users/:username/movies/:movieID', (req, res) => {
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
app.delete('/users/:username/movies/:movieID', (req, res) => {
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

// Get all movies --------------------------------------------------------------
app.get('/movies', (req, res) => {
  Movies.find()

    .then((movies) => {
      res.status(201).json(movies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err)
    });

});

// Get movie by name -----------------------------------------------------------
app.get('/movies/:movieName', (req, res) => {
  Movies.findOne(
    { Title: req.params.movieName })

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
app.post('/users', (req, res) => {
  // first check if username already exists
  Users.findOne({ username: req.body.username })

    .then((user) => {
      if (user) {
        return res.status(400).send(req.body.username + ' already exists');
      } else {
        // create new user
        Users.create({
          username: req.body.username,
          password: req.body.password,
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
app.delete('/users/:username', (req, res) => {
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
app.get('/movies/genres/:genreName', (req, res) => {
  Movies.findOne(
    { "Genre.Name": req.params.genreName })

    .then((movie) => {
      if (!movie) {
        res.status(400).send(req.params.genreName + ' could not be found.');
      } else {
        res.status(201).json(movie.Genre.Description);
      }
    }).catch((error) => {
      console.error(error);
      res.status(500).send('Error: ' + error);
    });

});

// Get description of director by name -----------------------------------------
app.get('/movies/directors/:directorName', (req, res) => {
  Movies.findOne(
    { "Director.Name": req.params.directorName })

    .then((movie) => {
      if (!movie) {
        res.status(400).send(req.params.directorName + ' could not be found.');
      } else {
        res.status(201).json(movie.Director);
      }
    }).catch((error) => {
      console.error(error);
      res.status(500).send('Error: ' + error);
    });

});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.listen(8080, () => {
  console.log('Your app is listening on port 8080');
});