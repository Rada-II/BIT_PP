/*Festival
In your IDE of choice, create a new JavaScript file named festival.js and make it so that all
code written in the file follows strict mode.
Create an anonymous immediately-invoking function that will hold the main execution of all
program calls. Writing a simple command console.log(“Hi”) inside this function and running
code should output “Hi“ in the console.
Create constructor functions with properties representing the following:
● Genre - name
● Movie - title, genre (instance of Genre), length
● Program - date, list of movies (initially empty) and total number of movies
Festival - name, list of programs (initially empty), and number of movies in all programs
Add method getData to Genre which returns formatted string as first and last letter of genre
name
"Action" -> AN
"Drama" -> DA
"Comedy" -> CY
Add getData method to Movie. It should return a formatted string consisting of the movie title,
length and genre acronym.
The Shawshank Redemption, 130min, AN
Add addMovie method to Program. It should receive a Movie and add the movie to the movie
list of a given program.
Add addProgram method to Festival. It should receive a Program and add the program to the
list of the given festival’s programs.
Add getData method to Program. It should return a formatted string of all data related to the
program. The string should contain date, program length (calculated from length of all movies in a
list) and data about movies in a list (see the example below). To display movie data, use Movie’s
getData method.
Date, program length from all movies
First movie title, length and genre
Second movie title, length and genre
Third movie title, length and genre
Fourth movie name and length and genre

Add method getData to Festival which return formatted string like festival name, number of
movies in all programs and all programs listed. Use Programs getData method to list all
programs. (example output is shown below)
Weekend festival has 4 movie titles
28.10.2017, program duration 368min
Spider-Man: Homecoming, 133min, AN
War for the Planet of the Apes, 140min, DA
The Dark Tower, 95min, WN
29.10.2017, program duration 108min
Deadpool, 108min, CY

Inside your immediately-invoking function, add createMovie function that receives a movie title,
movie length and genre (as a string) as parameters and returns a created Movie.
Inside your immediately-invoking function, add createProgram function that receives a date and
returns a created Program.
Start creating your movie festival.
In your main program function, create an instance of the Festival object.
Create two instances of Program using createProgram function.
Create four instances of Movie object using createMovie function. Add all created movies to
both programs using the addMovie method.
Add the created program instances to the created festival instance using festival’s addProgram
method.
Display festival’s data using getData method.
Hints
List is a synonym for array, so when we say a list of movies, it’s actually an array of movie
objects
Use JS built-in Date()object to create Date object
Use \t and \n special strings to format output
Use built-in String methods to transform text from lowercase to uppercase
Use Array’s built-in methods to add and remove elements from an array */

'use strict';

(function () {
  // Genre constructor function
  function Genre(name) {
    this.name = name;
    this.getData = function () {
      return (
        this.name[0].toUpperCase() +
        this.name[this.name.length - 1].toUpperCase()
      );
    };
  }

  // Movie constructor function
  function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.getData = function () {
      return this.title + ', ' + this.length + 'min, ' + this.genre.getData();
    };
  }

  // Program constructor function
  function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.numberOfMovies = 0;
    this.addMovie = function (movie) {
      this.listOfMovies.push(movie);
      this.numberOfMovies++;
    };
    this.getData = function () {
      let programLength = 0;
      let movieData = '';

      // this.listOfMovies.forEach(function (movie) {
      //   programLength += movie.length;
      //   movieData += '\t\t' + movie.getData() + '\n';
      // });

      for (let i = 0; i < this.listOfMovies.length; i++) {
        programLength += this.listOfMovies[i].length;
        movieData += '\t' + this.listOfMovies[i].getData() + '\n';
      }

      return (
        this.date.toDateString() +
        ', program duration ' +
        programLength +
        'min\n' +
        movieData
      );
    };
  }

  // Festival constructor function
  function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numberOfMovies = 0;
    this.addProgram = function (program) {
      this.listOfPrograms.push(program);
      this.numberOfMovies += program.numberOfMovies;
    };
    this.getData = function () {
      let programData = '';

      this.listOfPrograms.forEach(function (program) {
        programData += program.getData() + '\n';
      });

      return (
        this.name +
        ' has ' +
        this.numberOfMovies +
        ' movie titles\n' +
        programData
      );
    };
  }

  // Create instances of Movie, Program, and Festival
  let actionGenre = new Genre('action');
  let dramaGenre = new Genre('drama');
  let comedyGenre = new Genre('comedy');

  let shawshank = new Movie('The Shawshank Redemption', actionGenre, 130);
  let war = new Movie('War for the Planet of the Apes', dramaGenre, 140);
  let darkTower = new Movie('The Dark Tower', actionGenre, 95);
  let deadpool = new Movie('Deadpool', comedyGenre, 108);

  let oct28 = new Program('2017-10-28');
  let oct29 = new Program('2017-10-29');

  oct28.addMovie(shawshank);
  oct28.addMovie(war);
  oct28.addMovie(darkTower);

  oct29.addMovie(deadpool);

  let weekendFestival = new Festival('Weekend festival');

  weekendFestival.addProgram(oct28);
  weekendFestival.addProgram(oct29);

  console.log(weekendFestival.getData());

  function createMovie(title, length, genre) {
    let genreObj = new Genre(genre);
    return new Movie(title, genreObj, length);
  }

  function createProgram(date) {
    return new Program(date);
  }

  // Example usage of createMovie and createProgram functions
  let spiderMan = createMovie('Spider-Man: Homecoming', 133, 'action');
  let oct30 = createProgram('2017-10-30');
  oct30.addMovie(spiderMan);
  weekendFestival.addProgram(oct30);

  console.log(weekendFestival.getData());
  ('');
})();

/*Festival.js
When adding a movie to the movie list, make sure that there are no more than 4 movies of the
same genre. Also, length of all movies in a list can not be longer than 8 hours.
Handle error when you enter text instead of a number for movie length. Try to stop program
execution when this type of error happens.
Modify the festival so that it accepts maximum number of movies. Handle the error if text is
inserted instead of a number for maximum number of movies.
If there are no programs added to the festival, instead of program data display a message
informing the user that the program is yet to be announced.
Weekend festival
Program to be announced */

('use strict');

(function () {
  // Genre constructor function
  function Genre(name) {
    this.name = name;
    this.getData = function () {
      return (
        this.name[0].toUpperCase() +
        this.name[this.name.length - 1].toUpperCase()
      );
    };
  }

  // Movie constructor function
  function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.getData = function () {
      return this.title + ', ' + this.length + 'min, ' + this.genre.getData();
    };
  }

  // Program constructor function
  function Program(date, maxMovies) {
    if (typeof maxMovies !== 'number') {
      throw 'Error: Maximum number of movies must be a number.';
    }
    this.date = new Date(date);
    this.listOfMovies = [];
    this.numberOfMovies = 0;
    // this.addMovie = function (movie) {
    //   if (this.numberOfMovies === maxMovies) {
    //     throw 'Error: Program already has the maximum number of movies.';
    //   }
    //   let genreCount = this.listOfMovies.filter(function (listMovie) {
    //     return listMovie.genre === movie.genre;
    //   }).length;
    //   if (genreCount === 4) {
    //     throw 'Error: Program already has 4 movies of the same genre.';
    //   }
    //   let totalLength = this.listOfMovies.reduce(function (acc, movie) {
    //     return acc + movie.length;
    //   }, 0);
    //   if (totalLength + movie.length > 8 * 60) {
    //     throw 'Error: Program length can not be longer than 8 hours.';
    //   }
    //   this.listOfMovies.push(movie);
    //   this.numberOfMovies++;
    // };

    this.addMovie = function (movie) {
      let genreCount = 0;
      let acc = 0;

      for (let i = 0; i < this.listOfMovies.length; i++) {
        if (this.listOfMovies[i].genre === movie.genre) genreCount++;
        acc += this.listOfMovies[i].length;
      }
      if (genreCount === 4) {
        throw 'Error: Program already has 4 movies of the same genre.';
      }
      if (acc + movie.length > 8 * 60) {
        throw 'Error: Program length can not be longer than 8 hours.';
      }
      this.listOfMovies.push(movie);
      this.numberOfMovies++;
    };
    this.getData = function () {
      let programLength = 0;
      let movieData = '';

      this.listOfMovies.forEach(function (movie) {
        programLength += movie.length;
        movieData += '\t\t' + movie.getData() + '\n';
      });

      return (
        this.date.toDateString() +
        ', program duration ' +
        programLength +
        'min\n' +
        movieData
      );
    };
  }

  // Festival constructor function
  function Festival(name, maxMovies) {
    if (typeof maxMovies !== 'number') {
      throw 'Error: Maximum number of movies must be a number.';
    }
    this.name = name;
    this.listOfPrograms = [];
    this.numberOfMovies = 0;
    this.addProgram = function (program) {
      if (this.numberOfMovies + program.numberOfMovies > maxMovies) {
        throw 'Error: Festival already has the maximum number of movies.';
      }
      this.listOfPrograms.push(program);
      this.numberOfMovies += program.numberOfMovies;
    };
    this.getData = function () {
      if (this.listOfPrograms.length === 0) {
        return this.name + '\nProgram to be announced';
      }
      let programData = '';

      this.listOfPrograms.forEach(function (program) {
        programData += program.getData() + '\n';
      });

      return (
        this.name +
        ' has ' +
        this.numberOfMovies +
        ' movie titles\n' +
        programData
      );
    };
  }

  function createMovie(title, length, genre) {
    if (typeof length !== 'number') {
      throw 'Error: Movie length must be a number.';
    }
    let genreObj = new Genre(genre);
    return new Movie(title, genreObj, length);
  }

  function createProgram(date, maxMovies) {
    return new Program(date, maxMovies);
  }

  function createFestival(name, maxMovies) {
    return new Festival(name, maxMovies);
  }

  try {
    let actionGenre = new Genre('action');
    let dramaGenre = new Genre('drama');
    let comedyGenre = new Genre('comedy');

    let shawshank = createMovie('The Shawshank Redemption', 130, 'action');
    let war = createMovie('War for the Planet of the Apes', 140, 'drama');
    let darkTower = createMovie('The Dark Tower', 95, 'action');
    let deadpool = createMovie('Deadpool', 108, 'comedy');

    let oct28 = createProgram('2017-10-28', 4);
    let oct29 = createProgram('2017-10-29', 4);

    oct28.addMovie(shawshank);
    oct28.addMovie(war);
    oct28.addMovie(darkTower);

    oct29.addMovie(deadpool);

    let weekendFestival = createFestival('Weekend festival', 16);

    weekendFestival.addProgram(oct28);
    weekendFestival.addProgram(oct29);

    console.log(weekendFestival.getData());
  } catch (error) {
    console.log(error);
  }
})();

('use strict');

(function () {
  // Genre constructor function
  function Genre(name) {
    this.name = name;
    this.getData = function () {
      return (
        this.name[0].toUpperCase() +
        this.name[this.name.length - 1].toUpperCase()
      );
    };
  }

  // Movie constructor function
  function Movie(title, genre, length) {
    if (typeof length !== 'number') {
      throw 'Error: Movie length must be a number.';
    }
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.getData = function () {
      return this.title + ', ' + this.length + 'min, ' + this.genre.getData();
    };
  }

  // Program constructor function
  function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.numberOfMovies = 0;
    // this.addMovie = function (movie) {
    //   if (this.numberOfMovies === maxMovies) {
    //     throw 'Error: Program already has the maximum number of movies.';
    //   }
    //   let genreCount = this.listOfMovies.filter(function (listMovie) {
    //     return listMovie.genre === movie.genre;
    //   }).length;
    //   if (genreCount === 4) {
    //     throw 'Error: Program already has 4 movies of the same genre.';
    //   }
    //   let totalLength = this.listOfMovies.reduce(function (acc, movie) {
    //     return acc + movie.length;
    //   }, 0);
    //   if (totalLength + movie.length > 8 * 60) {
    //     throw 'Error: Program length can not be longer than 8 hours.';
    //   }
    //   this.listOfMovies.push(movie);
    //   this.numberOfMovies++;
    // };

    this.addMovie = function (movie) {
      let genreCount = 0;
      let acc = 0;

      for (let i = 0; i < this.listOfMovies.length; i++) {
        if (this.listOfMovies[i].genre.name === movie.genre.name) genreCount++;
        acc += this.listOfMovies[i].length;
        // console.log(this.listOfMovies[i].genre, movie.genre);
      }
      if (genreCount === 4) {
        throw 'Error: Program already has 4 movies of the same genre.';
      }
      if (acc + movie.length > 8 * 60) {
        throw 'Error: Program length can not be longer than 8 hours.';
      }
      this.listOfMovies.push(movie);
      this.numberOfMovies++;
    };
    this.getData = function () {
      let programLength = 0;
      let movieData = '';

      this.listOfMovies.forEach(function (movie) {
        programLength += movie.length;
        movieData += '\t\t' + movie.getData() + '\n';
      });

      return (
        this.date.toDateString() +
        ', program duration ' +
        programLength +
        'min\n' +
        movieData
      );
    };
  }
  // Festival constructor function
  function Festival(name, maxMovies) {
    if (typeof maxMovies !== 'number') {
      throw 'Error: Maximum number of movies must be a number.';
    }
    this.name = name;
    this.listOfPrograms = [];
    this.numberOfMovies = 0;
    this.addProgram = function (program) {
      if (this.numberOfMovies + program.numberOfMovies > maxMovies) {
        throw 'Error: Festival already has the maximum number of movies.';
      }
      this.listOfPrograms.push(program);
      this.numberOfMovies += program.numberOfMovies;
    };
    this.getData = function () {
      if (this.listOfPrograms.length === 0) {
        return this.name + '\nProgram to be announced';
      }
      let programData = '';

      this.listOfPrograms.forEach(function (program) {
        programData += program.getData() + '\n';
      });

      return (
        this.name +
        ' has ' +
        this.numberOfMovies +
        ' movie titles\n' +
        programData
      );
    };
  }

  function createMovie(title, length, genre) {
    if (typeof length !== 'number') {
      throw 'Error: Movie length must be a number.';
    }
    let genreObj = new Genre(genre);
    return new Movie(title, genreObj, length);
  }

  function createProgram(date) {
    return new Program(date);
  }

  function createFestival(name, maxMovies) {
    return new Festival(name, maxMovies);
  }

  try {
    let actionGenre = new Genre('action');
    let dramaGenre = new Genre('drama');
    let comedyGenre = new Genre('comedy');

    let shawshank = createMovie('The Shawshank Redemption', 130, 'action');
    let war = createMovie('War for the Planet of the Apes', 40, 'drama');
    let darkTower = createMovie('The Dark Tower', 95, 'action');
    let dieHard1 = createMovie('Die Hard 1', 30, 'action');
    let dieHard2 = createMovie('Die Hard 2', 30, 'action');
    let dieHard3 = createMovie('Die Hard 3', 130, 'action');
    let deadpool = createMovie('Deadpool', 108, 'comedy');

    let oct28 = createProgram('2017-10-28');
    let oct29 = createProgram('2017-10-29');

    oct28.addMovie(shawshank);
    oct28.addMovie(war);
    oct28.addMovie(darkTower);
    oct28.addMovie(dieHard1);
    oct28.addMovie(dieHard2);
    oct28.addMovie(dieHard3);

    oct29.addMovie(deadpool);

    let weekendFestival = createFestival('Weekend festival', 16);

    weekendFestival.addProgram(oct28);
    weekendFestival.addProgram(oct29);

    console.log(weekendFestival.getData());
  } catch (error) {
    console.log(error);
  }
})();
