const express = require('express'),
  morgan = require('morgan');

const app = express();

let topTenMovies = [
  "Movie One",
  "Movie Two",
  "Movie Three",
  "Movie Four",
  "Movie Five",
  "Movie Six",
  "Movie Seven",
  "Movie Eight",
  "Movie Nine",
  "Movie Ten",
];

// use statements
app.use(morgan('common'));
app.use(express.static('public'));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

//get requests
app.get('/', (req, res) => {
  res.send('Welcome to my app!')
});

app.get('/movies', (req, res) => {
  res.send({topTenMovies});
});

app.listen(8080, () => {
  console.log('App listening on port 8080')
});

