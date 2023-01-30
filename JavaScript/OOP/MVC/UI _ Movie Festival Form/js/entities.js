class Movie {
  constructor(name, duration, genre) {
    this.name = name;
    this.duration = duration;
    this.genre = genre;
  }
  getData() {
    return `${this.name}, ${this.duration} min, ${this.genre
      .slice(0, 2)
      .toUpperCase()}`;
  }
  getMovie() {
    return {
      name: this.name,
      duration: Number(this.duration),
      genre: this.genre,
    };
  }
}

/* creating class Program */
class Program {
  constructor(date, movieListCount, fullDuration) {
    this.date = date;
    this.movieListCount = movieListCount;
    this.fullDuration = fullDuration;
  }

  getData() {
    return `${this.date}, ${this.movieListCount} movies, duration: ${this.fullDuration}min `;
  }
}

class MovieProgram {
  constructor(movie, program) {
    this.movie = movie;
    this.program = program;
  }
  getData() {
    return `${this.movie} - ${this.program}`;
  }
}
