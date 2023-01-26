/*1.
Headquarters have asked that you store the following information about each book: title, author,
copyright date, ISBN, number of pages, number of times the book has been checked out, whether the book has been discarded.

Headquarters also needs you to track certain actions that you must perform when books get out of date.
First, for a manual, the book must be thrown out if it is over 5 years old.
Second, for a novel, the book should be thrown out if it has been checked out over 100 times.

Construct three classes that hold the information needed by headquarters as properties.
One class should be a Book class and two child classes of the Book class called Manual and Novel.
Each class will contain two methods. One will be a constructor.
The other one will either be in charge of disposal of the book or updating the property related to the number of times a book has been checked out.
Hint: This means you need to read through the requirements for the problem and decide what should belong to Book and what should belong to the Novel and Manual classes.
 
Declare an object of the Novel class for the following tome from the library. Declare an object of the Manual class for the following tome from the library.
One of the above books needs to be discarded. Call the appropriate method for that book to update the property. That way the crew can throw it into empty space to become debris.
The other book has been checked out 5 times since you first created the object. Call the appropriate method to update the number of times the book has been checked out */

class Book {
  constructor(
    title,
    author,
    copyrightDate,
    ISBN,
    numberOfPages,
    numberOfTimesCheckedOut = 0,
    isDiscarded = false
  ) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.ISBN = ISBN;
    this.numberOfPages = numberOfPages;
    this.numberOfTimesCheckedOut = numberOfTimesCheckedOut;
    this.isDiscarded = isDiscarded;
    return this;
  }

  updateCheckoutCount(count) {
    this.numberOfTimesCheckedOut += count;
    return this;
  }
}

class Manual extends Book {
  constructor(title, author, copyrightDate, ISBN, numberOfPages) {
    super(title, author, copyrightDate, ISBN, numberOfPages);
  }

  disposeIfOutdated() {
    const currentYear = new Date().getFullYear();
    if (currentYear - this.copyrightDate > 5) {
      this.isDiscarded = true;
    }
    return this;
  }
}

class Novel extends Book {
  constructor(title, author, copyrightDate, ISBN, numberOfPages) {
    super(title, author, copyrightDate, ISBN, numberOfPages);
  }

  disposeIfOverCheckedOut() {
    if (this.numberOfTimesCheckedOut > 100) {
      this.isDiscarded = true;
    }
    return this;
  }
}

// Creating a new Book object
const book = new Book(
  'Dervis i smrt',
  'Mesa Selimovic',
  1966,
  '9788610009729',
  474
);
console.log(book.title);
console.log(book.numberOfTimesCheckedOut);
book.updateCheckoutCount(3);
console.log(book.numberOfTimesCheckedOut);

// Creating a new Manual object
const manual = new Manual(
  'JavaScript For Dummies',
  'Emily A. Vander Veer',
  2000,
  '0764506331',
  408
);
console.log(manual.title);
console.log(manual.isDiscarded);
manual.disposeIfOutdated();
console.log(manual.isDiscarded);

//Creating a new Novel object
const novel = new Novel(
  'The Art of Being',
  'Erih Fromm',
  1989,
  '0826406149',
  158
);
console.log(novel.title);
console.log(novel.isDiscarded);
novel.disposeIfOverCheckedOut();
console.log(novel.isDiscarded);
