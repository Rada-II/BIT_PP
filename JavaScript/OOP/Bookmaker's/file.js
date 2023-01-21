/*Bookmaker’s
In your IDE of choice, create a new JavaScript file named booking-house.js and make it so
that all code written in the file follows JS strict mode.
Create an anonymous immediately-invoking function that will hold main execution of all program
calls. Make sure that functions that you write in this function are pure functions.
Create constructor functions with properties representing the following:
● Country - name, odds, continent (EU, AS, AF, SA, NA, AU)
● Person - name, surname, date of birth
Player - person (instance of Person), bet amount, country (instance of Country)
Address - country, city, postal code, street and number
● BettingPlace - address and list of players (initially empty)
● BettingHouse - competition, list of betting places (initially empty) and number of players
Create continents as constants (objects that can not change). So, when passing a continent as a
parameter, you should pass Continent.ASIA.
Add a method to Person that returns a formatted string containing the name, surname and date
of birth of the person (date of birth in dd.mm.yy format).
Add a method to Address that returns a formatted string like the following one:
Nemanjina 4, 11000 Beograd, SR
Add a method to Player that returns a formatted string containing a country, expected win
amount (odds * bet amount) and person data.
SR, 1050.00 eur, Pera Peric, 29 years
Add a method to BettingPlace that returns a formatted string containing a street (without a
number), postal code and city, and sum of all bet amounts of that place.
Nemanjina, 11000 Belgrade, sum of all bets: 50000eur
Add a method to BettingPlace that adds a player to the players list of a betting place.
Inside your immediately-invoking function, add a function that returns a created Player.
Inside your immediately-invoking function, add a function that creates a BettingPlace.
Create an instance of the BettingHouse that receives the name of competition.
Create four players with random data. Create two betting places. Add created players as you wish
to Betting places. Add betting places to the betting house.
Display all betting house data in the following manner:

Football World Cup Winner, 2 betting places, 4 bets
Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
SR, 1050.00 eur, Pera Peric, 29 years
SR, 1050.00 eur, Pera Peric, 29 years
Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
GR, 1050.00 eur, Pera Peric, 29 years
SR, 1050.00 eur, Pera Peric, 29 years

There are 3 bets on Serbia */

'use strict';

// Create anonymous immediately-invoking function
(function () {
  // Define continents as constants
  const Continent = Object.freeze({
    EU: 'EU',
    AS: 'AS',
    AF: 'AF',
    SA: 'SA',
    NA: 'NA',
    AU: 'AU',
  });

  // Constructor function for Country
  function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent = continent;
  }

  // Constructor function for Person
  function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
  }

  // Add method to Person that returns a formatted string
  Person.prototype.getPersonData = function () {
    return `${this.name} ${
      this.surname
    }, ${this.dateOfBirth.toLocaleDateString()}`;
  };

  // Constructor function for Player
  function Player(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
  }

  // Add method to Player that returns a formatted string
  Player.prototype.getPlayerData = function () {
    return `${this.country.name}, ${
      this.betAmount
    } eur, ${this.person.getPersonData()}`;
  };

  // Constructor function for Address
  function Address(country, city, postalCode, street, number) {
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.number = number;
  }

  // Add method to Address that returns a formatted string
  Address.prototype.getAddressData = function () {
    return `${this.number} ${this.street}, ${this.postalCode} ${this.city}, ${this.country}`;
  };

  // Constructor function for BettingPlace
  function BettingPlace(address) {
    this.address = address;
    this.players = [];
  }

  // Add method to BettingPlace that returns a formatted string
  BettingPlace.prototype.getBettingPlaceData = function () {
    let sumOfBets = 0;
    for (let player of this.players) {
      sumOfBets += player.betAmount;
    }
    return `${this.address.street}, ${this.address.postalCode} ${this.address.city}, sum of all bets: ${sumOfBets}eur`;
  };

  // Add method to BettingPlace that adds a player to the players list
  BettingPlace.prototype.addPlayer = function (player) {
    this.players.push(player);
  };

  // Constructor function for BettingHouse
  function BettingHouse(competition) {
    this.competition = competition;
    this.bettingPlaces = [];
    this.numberOfBets = 0;
  }

  // Add method to BettingHouse that returns a formatted string
  BettingHouse.prototype.getBettingHouseData = function () {
    let data = `${this.competition}, ${this.bettingPlaces.length} betting places, ${this.numberOfBets} bets\n`;
    for (let bettingPlace of this.bettingPlaces) {
      data += bettingPlace.getBettingPlaceData() + '\n';
      for (let player of bettingPlace.players) {
        data += player.getPlayerData() + '\n';
      }
    }
    return data;
  };

  // Add method to BettingHouse that adds a betting place to the list
  BettingHouse.prototype.addBettingPlace = function (bettingPlace) {
    this.bettingPlaces.push(bettingPlace);
    this.numberOfBets += bettingPlace.players.length;
  };

  // Function that creates and returns a Player
  function createPlayer(person, betAmount, country) {
    return new Player(person, betAmount, country);
  }

  // Function that creates and returns a BettingPlace
  function createBettingPlace(address) {
    return new BettingPlace(address);
  }

  // Create instances of Country
  let serbia = new Country('Serbia', 2.5, Continent.EU);
  let greece = new Country('Greece', 3.0, Continent.EU);

  // Create instances of Person
  let peraPeric = new Person('Pera', 'Peric', new Date('1994-03-29'));
  let mikaMikic = new Person('Mika', 'Mikic', new Date('1989-05-12'));
  let janaJanic = new Person('Jana', 'Janic', new Date('1987-07-21'));
  let petarPetrovic = new Person('Petar', 'Petrovic', new Date('1995-09-03'));

  // Create instances of Player
  let player1 = createPlayer(peraPeric, 1050, serbia);
  let player2 = createPlayer(peraPeric, 1050, serbia);
  let player3 = createPlayer(peraPeric, 1050, greece);
  let player4 = createPlayer(peraPeric, 1050, serbia);

  // Create instances of Address
  let address1 = new Address('Serbia', 'Belgrade', '11000', 'Nemanjina', '4');
  let address2 = new Address('Serbia', 'Belgrade', '11000', 'Nemanjina', '5');

  // Create instances of BettingPlace
  let bettingPlace1 = createBettingPlace(address1);
  let bettingPlace2 = createBettingPlace(address2);

  // Add players to betting places
  bettingPlace1.addPlayer(player1);
  bettingPlace1.addPlayer(player2);
  bettingPlace2.addPlayer(player3);
  bettingPlace2.addPlayer(player4);

  // Create instance of BettingHouse
  let bettingHouse = new BettingHouse('Football World Cup Winner');

  // Add betting places to betting house
  bettingHouse.addBettingPlace(bettingPlace1);
  bettingHouse.addBettingPlace(bettingPlace2);

  // display all betting house data
  console.log(bettingHouse.getBettingHouseData());
  let serbiaBets = bettingHouse.bettingPlaces
    .map(p => p.players.filter(player => player.country.name === 'Serbia'))
    .flat();
  console.log(`There are ${serbiaBets.length} bets on Serbia`);
})();
