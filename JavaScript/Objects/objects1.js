/*1. Create an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like!*/

let coffee = {
  name: "Nescafe Gold",
  sugar: false,
  milk: "Almond",
};
console.log(coffee);

/*2. Create an object that represents your favorite movie. Please include title, actors,
director, genre, popularity.*/

let favoriteMovie = {
  name: "American Beauty",
  actors: ["Kevin Spacey", "Anette Bening"],
  director: "Sam Mendes",
  genre: "drama",
  popularity: 8.4,
};
console.log(favoriteMovie);

/*3. Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project's
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not.*/

function Project(description, language, gitRepository, developmentStatus) {
  this.description = description;
  this.language = language;
  this.gitRepository = gitRepository;
  this.developmentStatus = developmentStatus;

  //metods

  this.projectRepository = function () {
      console.log(this.gitRepository);
  }

  this.isJavaScript = function () {
      if (this.language === "Java Script") {
          console.log("Project was writen in Java Script.")
      }
      else {
          console.log("Project wasn't writen in Java Script.")
      }
  }

  this.isDevelopment = function () {
      if (this.developmentStatus === true) {
          console.log("Project is in development.")
      }
      else {
          console.log("Project isn't in development.")
      }
  }
}

let object = new Project("School support", "Java Script", "www.gitHub.com", true);

object.projectRepository();
object.isJavaScript();
object.isDevelopment();
/*
  4.	Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
  ○	Add a method that prints out all the ingredients necessary for the meal preparation. 
  ○	Add a method that checks if a meal can be prepared for 15 minutes. 
  ○	Add a method that changes the type of cuisine to the given value. 
  ○	Add a method that delete a given ingredient from the list of ingredients.  
*/

function Recipe(name, cuisine, complexity, ingredients, time, instructions) {
  this.name = name;
  this.cuisine = cuisine;
  this.complexity = complexity;
  this.ingredients = ingredients;
  this.preparingTime = time;
  this.instructions = instructions;

  this.ingredientsList = function () {
      console.log("Ingredients for this recipe are: " + this.ingredients.join(","));
  }

  this.preparingFor15Minutes = function () {
      if (this.preparingTime >= 15) {
          console.log("Meal can be prepared for 15 minutes.");
      }
      else {
          console.log("Meal can't be prepared for 15 minutes.");
      }
  }

  this.changeCuisine = function (newCuisine) {
      this.cuisine = newCuisine;
  }

  this.removeIngredient = function (ingredientForRemove) {
      let newIngredients = [];
      for (let i = 0; i < this.ingredients.length; i++) {
          if (this.ingredients[i] != ingredientForRemove) {
              newIngredients[newIngredients.length] = this.ingredients[i];
          }
      }

      this.ingredients = newIngredients.slice();
  }
}

let omelette = new Recipe("omelette", "Italian", 1, ["eggs", "ham", "cheese", "vegetables"], 5, "Mix all ingredients and fry it in the pen for 5 minutes, both side")

console.log(JSON.stringify(omelette));

omelette.ingredientsList();

omelette.preparingFor15Minutes();

omelette.changeCuisine("French");
omelette.removeIngredient("ham");

console.log(JSON.stringify(omelette));