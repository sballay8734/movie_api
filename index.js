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
    genres: ['Comedy', 'Crime', 'Drama'],
    directors: 'Rian Johnson',
    imgURL: 'Placeholder',
  },
];

let genres = [
  {
    genre: 'Thriller',
    description: 'Thriller is a genre of fiction, having numerous, often overlapping subgenres. Thrillers are characterized and defined by the moods they elicit, giving viewers heightened feelings of suspense, excitement, surprise, anticipation and anxiety.'
  },
  {
    genre: 'Comedy',
    description: 'Comedy is a genre of fiction that consists of discourses or works intended to be humorous or amusing by inducing laughter, especially in theatre, film, stand-up comedy, television, radio, books, or any other entertainment medium.'
  },
  {
    genre: 'Animation',
    description: 'Animation is a method by which still figures are manipulated to appear as moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets to be photographed and exhibited on film. Today, most animations are made with computer-generated imagery (CGI).'
  },
]

let directors = [
  {
    name: 'Dean DeBlois',
    description: 'Canadian film director, film producer, screenwriter, and animator. He is best known for writing and directing the Oscar-nominated animated films Lilo & Stitch for Walt Disney Animation Studios (with Chris Sanders), the How to Train Your Dragon film trilogy for DreamWorks Animation (the first film also with Sanders), and directing the documentary Heima about the Icelandic band Sigur Rós.'
  },
  {
    name: 'Andrew Stanton',
    description: 'American filmmaker and voice actor based at Pixar, which he joined in 1990.[2] His film work includes co-writing and co-directing Pixar\'s A Bug\'s Life (1998), directing Finding Nemo (2003)[3] and the sequel Finding Dory (2016), WALL-E (2008), and the live-action film, Disney\'s John Carter (2012), and co-writing all four Toy Story films (1995-2019) and Monsters, Inc. (2001).'
  },
  {
    name: 'Rian Johnson',
    description: 'American filmmaker. He made his directorial debut with the neo-noir mystery film Brick (2005), which received positive reviews and grossed nearly $4 million on a $450,000 budget. Transitioning to higher-profile films, Johnson achieved mainstream recognition for writing and directing the science-fiction thriller Looper (2012) to critical and commercial success. Johnson landed his largest project when he wrote and directed the space opera Star Wars: The Last Jedi (2017), which grossed over $1 billion. He returned to the mystery genre with Knives Out (2019), which earned him an Academy Award nomination for Best Original Screenplay, and its sequel, Glass Onion (2022).'
  },
]

// Gets the list of data about ALL movies: WORKING
app.get('/movies', (req, res) => {
  let moviesList = [];
  movies.forEach((movie) => {
    moviesList.push(movie.title)
  })
  res.send(moviesList);
});

// Gets the description about a single movie, by name: WORKING
app.get('/movies/:title/description', (req, res) => {
  res.send('Successful Endpoint: Get movie descriptions')
});

// Gets the genres of a single movie, by name WORKING
app.get('/movies/:title/genres', (req, res) => {
  res.send('Successful Endpoint: Get genre(s) of movie')
});

// Gets the director(s) of a single movie, by name WORKING
app.get('/movies/:title/directors', (req, res) => {
  res.send('Successful Endpoint: Get director(s) of movie')
});

// Gets the cover art of a single movie, by name WORKING
app.get('/movies/:title/image', (req, res) => {
  res.send('Successful Endpoint: Get cover art of movie')
});

// Gets description of genre by name WORKING
app.get('/movies/genres/:genre', (req, res) => {
  res.send('Successful Endpoint: Get description of chosen genre')
});

// Gets description of director by name WORKING
app.get('/movies/directors/:director', (req, res) => {
  res.send('Successful Endpoint: Get description of chosen director')
});

// Registers a new user WORKING
app.post('/users/register', (req, res) => {
  res.send('Successful Endpoint: Register new user');
});

// Updates user info WORKING
app.post('/users/:username/info', (req, res) => {
  res.send('Successful Endpoint: Update user info')
});

// Add movie to list of favorites WORKING
app.post('/users/:username/favorites', (req, res) => {
  res.send('Successful Endpoint: Add movie to favorites')
});

// Removes movie from list of favorites WORKING
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