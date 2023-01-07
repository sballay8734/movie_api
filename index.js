const express = require('express'),
  bodyParser = require('body-parser'),
  uuid = require('uuid');

const app = express();

app.use(bodyParser.json());

let movies = [
  {
    title: 'How to Train Your Dragon',
    description: 'A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.',
    genres: ['animation', 'action', 'adventure'],
    directors: ['Dean DeBlois', 'Chris Sanders'],
    imgURL: 'Placeholder',
  },
  {
    title: 'Finding Nemo',
    description: 'After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.',
    genres: ['animation', 'adventure', 'comedy'],
    directors: ['Andrew Stanton', 'Lee Unkrich'],
    imgURL: 'Placeholder',
  },
  {
    title: 'Glass Onion: A Knives Out Mystery',
    description: 'Famed Southern detective Benoit Blanc travels to Greece for his latest case.',
    genres: ['comedy', 'crime', 'drama'],
    directors: 'Rian Johnson',
    imgURL: 'Placeholder',
  },
  {
    title: 'Finding Nemo',
    description: 'This movie does not exist. It is just a duplicate title to test request functionality',
    genres: ['horror', 'crime', 'drama'],
    directors: ['Andrew Stanton', 'Lee Unkrich'],
    imgURL: 'Placeholder',
  },
];

let directors = [
  {
    name: 'Dean DeBlois',
    bio: 'Canadian film director, film producer, screenwriter, and animator. He is best known for writing and directing the Oscar-nominated animated films Lilo & Stitch for Walt Disney Animation Studios (with Chris Sanders), the How to Train Your Dragon film trilogy for DreamWorks Animation (the first film also with Sanders), and directing the documentary Heima about the Icelandic band Sigur Rós.',
    birthYear: 1970,
    deathYear: null,
  },
  {
    name: 'Andrew Stanton',
    bio: 'American filmmaker and voice actor based at Pixar, which he joined in 1990.[2] His film work includes co-writing and co-directing Pixar\'s A Bug\'s Life (1998), directing Finding Nemo (2003)[3] and the sequel Finding Dory (2016), WALL-E (2008), and the live-action film, Disney\'s John Carter (2012), and co-writing all four Toy Story films (1995-2019) and Monsters, Inc. (2001).',
    birthYear: 1965,
    deathYear: null,
  },
  {
    name: 'Rian Johnson',
    bio: 'American filmmaker. He made his directorial debut with the neo-noir mystery film Brick (2005), which received positive reviews and grossed nearly $4 million on a $450,000 budget. Transitioning to higher-profile films, Johnson achieved mainstream recognition for writing and directing the science-fiction thriller Looper (2012) to critical and commercial success. Johnson landed his largest project when he wrote and directed the space opera Star Wars: The Last Jedi (2017), which grossed over $1 billion. He returned to the mystery genre with Knives Out (2019), which earned him an Academy Award nomination for Best Original Screenplay, and its sequel, Glass Onion (2022).',
    birthYear: 1973,
    deathYear: null,
  },
]

let users = [
  {
    name: 'testName',
    email: 'testEmail',
    id: 1
  },
  {
    name: 'testName2',
    email: 'testEmail2',
    id: 2
  },
  {
    name: 'testName3',
    email: 'testEmail3',
    id: 3
  },
];

// Gets the list of data about ALL movies: WORKING
app.get('/movies', (req, res) => {
  res.send(movies);
});

// Get a list of all movies that match a given name
app.get('/movies/:movieTitle', (req, res) => {
  res.json(movies.filter((movie) => { return movie.title.toLocaleLowerCase() === req.params.movieTitle.toLocaleLowerCase() }));
});

// Gets a list of all movies containing the same genre
app.get('/movies/genres/:genreName', (req, res) => {
  let movieByGenreList = [];
  movies.forEach((movie) => {
    if (movie.genres.includes(req.params.genreName)) {
      movieByGenreList.push(movie);
    }
  });
  res.send(movieByGenreList);
});

// Return object matching directors name
app.get('/movies/directors/:directorName', (req, res) => {
  res.json(directors.find((director) => {
    { return director.name.toLocaleLowerCase() === req.params.directorName.toLocaleLowerCase() }
  }));
});

// Registers a new user
app.post('/users', (req, res) => {
  let newUser = req.body;

  if (!newUser.name) {
    const message = 'Missing name in request body'
    res.status(400).send(message)
  } else {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).send(newUser);
  }
});

// Updates user info (using user 'name' to test)
app.put('/users/:id', (req, res) => {
  let user = users.find((user) => { return user.id === parseInt(req.params.id) });

  if (!req.body.name || !user) {
    const message = 'Something went wrong.'
    res.status(400).send(message)
  } else {
    user.name = req.body.name;
    res.status(201).send(user);
  }

});

// Add movie to list of favorites
app.post('/users/:username/favorites', (req, res) => {
  res.send('Successful Endpoint: Add movie to favorites')
});

// Removes movie from list of favorites
app.delete('/users/:username/favorites', (req, res) => {
  res.send('Successful Endpoint: Remove movie from favorites')
});

// Deregister Account
app.delete('/users/:username/deregister', (req, res) => {
  res.send('Successful Endpoint: Deregister')
});






app.listen(8080, () => {
  console.log('Your app is listening on port 8080');
});