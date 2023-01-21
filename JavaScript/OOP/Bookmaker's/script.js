'use strict';

(function () {
  // Continents
  const EU = 'EU';
  const AS = 'AS';
  const AF = 'AF';
  const SA = 'SA';
  const NA = 'NA';
  const AU = 'AU';

  // Country constructor function
  function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent = continent;
  }

  // Person constructor function
  function Person(name, surname, dob) {
    this.name = name;
    this.surname = surname;
    this.dob = dob;

    this.getFormattedString = function () {
      return `${this.name} ${this.surname}, ${this.dob.toLocaleDateString()}`;
    };
  }

  // Player constructor function
  function Player(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;

    this.getFormattedString = function () {
      return `${this.country.name}, ${
        this.country.odds * this.betAmount
      } eur, ${this.person.getFormattedString()}`;
    };
  }

  // Address constructor function
  function Address(country, city, postalCode, street, number) {
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.number = number;

    this.getFormattedString = function () {
      return `${this.number} ${this.street}, ${this.postalCode} ${this.city}, ${this.country}`;
    };
  }

  // BettingPlace constructor function
  function BettingPlace(address) {
    this.address = address;
    this.players = [];

    this.getFormattedString = function () {
      let sum = this.players.reduce((acc, curr) => acc + curr.betAmount, 0);
      return `${this.address.street}, ${this.address.postalCode} ${this.address.city}, sum of all bets: ${sum}eur`;
    };

    this.addPlayer = function (player) {
      this.players.push(player);
    };
  }

  // BettingHouse constructor function
  function BettingHouse(competition) {
    this.competition = competition;
    this.bettingPlaces = [];
    this.numberOfPlayers = 0;

    this.addBettingPlace = function (bettingPlace) {
      this.bettingPlaces.push(bettingPlace);
      this.numberOfPlayers += bettingPlace.players.length;
    };

    this.getFormattedString = function () {
      let places = this.bettingPlaces
        .map(place => place.getFormattedString())
        .join('\n');
      let players = this.bettingPlaces
        .map(place => place.players)
        .flat()
        .map(player => player.getFormattedString())
        .join('\n');
      return `${this.competition}, ${this.bettingPlaces.length} betting places, ${this.numberOfPlayers} bets\n${places}\n${players}`;
    };
  }

  // Function to create a player
  const createPlayer = (name, surname, dob, betAmount, country) => {
    let person = new Person(name, surname, new Date(dob));
    return new Player(person, betAmount, country);
  };

  // Function to create a betting place
  const createBettingPlace = (street, city, postalCode, country) => {
    let address = new Address(country, city, postalCode, street);
    return new BettingPlace(address);
  };

  // Create instance of BettingHouse
  let footballWorldCup = new BettingHouse('Football World Cup Winner');

  // Create players
  let player1 = createPlayer(
    'Pera',
    'Peric',
    '1992-01-01',
    1000,
    new Country('Serbia', 2, EU)
  );
  let player2 = createPlayer(
    'Mika',
    'Mikic',
    '1995-01-01',
    2000,
    new Country('Serbia', 2, EU)
  );
  let player3 = createPlayer(
    'Zika',
    'Zikic',
    '1990-01-01',
    1500,
    new Country('Greece', 3, EU)
  );
  let player4 = createPlayer(
    'Laza',
    'Lazic',
    '1985-01-01',
    1200,
    new Country('Serbia', 2, EU)
  );

  // Create betting places
  let bettingPlace1 = createBettingPlace(
    'Nemanjina',
    'Belgrade',
    '11000',
    'Serbia'
  );
  let bettingPlace2 = createBettingPlace(
    'Nemanjina',
    'Belgrade',
    '11000',
    'Serbia'
  );

  // Add players to betting places
  bettingPlace1.addPlayer(player1);
  bettingPlace1.addPlayer(player2);
  bettingPlace2.addPlayer(player3);
  bettingPlace2.addPlayer(player4);

  // Add betting places to betting house
  footballWorldCup.addBettingPlace(bettingPlace1);
  footballWorldCup.addBettingPlace(bettingPlace2);

  // Display all betting house data
  console.log(footballWorldCup.getFormattedString());
})();
