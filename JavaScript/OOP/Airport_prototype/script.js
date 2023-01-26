'use strict';

(function () {
  // Person constructor
  function Person(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  // Person getData method
  Person.prototype.getData = function () {
    return this.name + ' ' + this.surname;
  };

  // Seat constructor
  function Seat(number, category) {
    this.number = number || Math.floor(Math.random() * (100 - 10) + 10);
    this.category = category || 'e';
    return this;
  }

  // Seat getData method
  Seat.prototype.getData = function () {
    return this.number + ', ' + this.category.toUpperCase();
  };

  // Passenger constructor
  function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;
  }

  // Passenger getData method
  Passenger.prototype.getData = function () {
    return this.seat.getData() + ', ' + this.person.getData();
  };

  // Flight constructor
  function Flight(relation, date) {
    this.relation = relation;
    this.date = new Date(date);
    this.passengers = [];
  }

  // Flight addPassenger method
  Flight.prototype.addPassenger = function (passenger) {
    this.passengers.push(passenger);
    return this;
  };

  // Flight getData method
  Flight.prototype.getData = function () {
    let dateString = this.date.toLocaleDateString();
    let passengersData = '';

    for (let i = 0; i < this.passengers.length; i++) {
      passengersData += '\t' + this.passengers[i].getData() + '\n';
    }

    return dateString + ', ' + this.relation + '\n' + passengersData;
  };

  // Airport constructor
  function Airport() {
    this.name = 'Nikola Tesla';
    this.flights = [];
    return this;
  }

  // Airport addFlight method
  Airport.prototype.addFlight = function (flight) {
    this.flights.push(flight);
    return this;
  };

  // Airport getData method
  Airport.prototype.getData = function () {
    let totalPassengers = 0;
    let flightsData = '';

    for (let i = 0; i < this.flights.length; i++) {
      totalPassengers += this.flights[i].passengers.length;
      flightsData += this.flights[i].getData() + '\n';
    }

    return (
      'Airport: ' +
      this.name +
      ', total passengers: ' +
      totalPassengers +
      '\n' +
      flightsData
    );
  };

  // createFlight function
  function createFlight(relation, date) {
    return new Flight(relation, date);
  }

  // createPassenger function
  function createPassenger(firstName, lastName, seatNumber, category) {
    let person = new Person(firstName, lastName);
    let seat = new Seat(seatNumber, category);
    return new Passenger(person, seat);
  }

  // Main program
  let airport = new Airport();
  let flight1 = createFlight('Belgrade - New York', 'Oct 25 2017');
  let flight2 = createFlight('Barcelona - Belgrade', 'Nov 11 2017');

  let passenger1 = createPassenger('John', 'Snow', 1, 'b');
  let passenger2 = createPassenger('Cersei', 'Lannister', 2, 'b');
  let passenger3 = createPassenger('Daenerys', 'Targaryen', 14);
  let passenger4 = createPassenger('Tyrion', 'Lannister');

  flight1.addPassenger(passenger1);
  flight1.addPassenger(passenger2);
  flight2.addPassenger(passenger3);
  flight2.addPassenger(passenger4);

  airport.addFlight(flight1);
  airport.addFlight(flight2);

  console.log(airport.getData());
})();
