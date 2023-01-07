
let testObject = [
  {
    title: 'finding nemo',
    genres: ['animation', 'comedy', 'adventure']
  },
  {
    title: 'blah blah',
    genres: ['animation', 'horror', 'adventure']
  }
]

let testGenre = 'horror';

let newList = [];
testObject.forEach((movie) => {
  if (movie.genres.includes(testGenre)) {
    newList.push(movie);
  }
})
console.log(newList)