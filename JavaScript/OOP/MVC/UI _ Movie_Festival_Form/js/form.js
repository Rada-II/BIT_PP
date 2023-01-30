let movies = [];
let moviesForDropDown = [];
let programsForDropDown = [];

function createMovie() {
  let name = document.getElementById('movieName').value;
  let duration = document.getElementById('movieDuration').value;
  let genre = document.getElementById('movieGenre').value;

  if (!name || !duration || !genre) {
    alert('Please fill out all fields.');
    return;
  }

  let movie = new Movie(name, duration, genre);
  let movieEl = document.createElement('div');
  movieEl.innerHTML = movie.getData();
  movies.push(movie.getMovie());
  document.getElementById('output').appendChild(movieEl);
  document.getElementById('movieForm').reset();

  let moviesSelect = document.getElementById('selectMovie');
  let myOption = document.createElement('option');
  myOption.text = movie.getData();
  myOption.value = movie.getData();
  moviesSelect.add(myOption);
}
const createButton = document.getElementsByClassName('create-button');
createButton.addEventListener('click', createMovie);
function getFullDuration(movies) {
  if (!movies.length) return 0;
  let count = 0;
  movies.forEach(movie => {
    count += movie.duration;
  });
  return count;
}
function createProgram() {
  let date = document.getElementById('date').value;

  if (!date) {
    alert('Please fill out date.');
    return;
  }

  let program = new Program(date, movies.length, getFullDuration(movies));
  let programEl = document.createElement('div');
  programEl.innerHTML = program.getData();

  document.getElementById('programOutput').appendChild(programEl);
  document.getElementById('programForm').reset();
  let programsSelect = document.getElementById('selectProgram');
  let myOption = document.createElement('option');
  myOption.text = program.getData();
  myOption.value = program.getData();
  programsSelect.add(myOption);
}
const createProgramButton = document.getElementsByClassName(
  'create-program-button'
);
createProgramButton.addEventListener('click', createProgram);

function createMovieProgram() {
  let movie = document.getElementById('selectMovie').value;
  let program = document.getElementById('selectProgram').value;

  if (!movie.length || !program.length) {
    alert('Please fill out all fields.');
    return;
  }

  let movieProgram = new MovieProgram(movie, program);

  let movieProgramEl = document.createElement('div');
  movieProgramEl.innerHTML = movieProgram.getData();

  document.getElementById('movieProgramOutput').appendChild(movieProgramEl);
  document.getElementById('movieProgramForm').reset();
}
const createMovieProgramButton = document.getElementsByClassName(
  'create-movie-program-button'
);
createProgramButton.addEventListener('click', createMovieProgram);
