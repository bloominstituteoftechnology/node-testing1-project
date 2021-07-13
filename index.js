/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {
  const objCopy = {};

  // loop through the values in an object
  for (const key in obj) {

    const value = obj[key];

    if (typeof value === 'string') {
      const trimmedValue = value.trim();
      objCopy[key] = trimmedValue;
    } else {
      objCopy[key] = value;
    }

  };

  return objCopy;
}

// const test = trimProperties({ name: '  jane  ', age: 23 });
// console.log("test", test);

/**
 * [Exercise 2] trimPropertiesMutation mutates an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
  // loop through the values in an object
  for (const key in obj) {

    const value = obj[key];

    if (typeof value === 'string') {
      const trimmedValue = value.trim();
      obj[key] = trimmedValue;
    }

  };

  return obj;
}

// const test = trimPropertiesMutation({ name: '  jane  ', age: 23 });
// console.log("test", test);


/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */
function findLargestInteger(integers) {
  // find the largest integer in an array of objects 
  let largestInteger = 0;

  integers.forEach(integer => {
    if (integer.integer > largestInteger) {
      largestInteger = integer.integer;
    }
  });

  return largestInteger;

}

// const test = findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]);
// console.log("test", test);

class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */
  constructor(initialNumber) {
    this.number = initialNumber; // counter initializes with an initial number
  }

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */
  countDown() {
  const originalNumber = this.number;

    // zero never goes through the decrement
    if (this.number > 0) {
      this.number -= 1;
    }

    return originalNumber; 
  }
}

// const counter = new Counter(3)
// const counterTwo = new Counter(5)

// console.log("test", counter.countDown());
// console.log("test", counter.countDown());
// console.log("test", counterTwo.countDown());


class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor(initialSeason) {
    this.season = initialSeason; // season initializes with an initial season
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  next() {
    const originalSeason = this.season;

    // array of seasons
    const seasons = ["summer", "fall", "winter", "spring"];
    const originalIndex = seasons.indexOf(originalSeason); // gets the index of the original season
    const nextIndex = (originalIndex + 1) % seasons.length; // gets the index of the next season

    const nextSeason = seasons[nextIndex]; // gets the next season by nextIndex

    this.season = nextSeason;
    return originalSeason; 
  }
}

// TEST
const seasonsList = new Seasons("summer")
console.log("test", seasonsList.next());
console.log("test", seasonsList.next());
console.log("test", seasonsList.next());
console.log("test", seasonsList.next());
console.log("test", seasonsList.next());


class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0 // car initilizes with zero miles
    this.tank = tankSize // car initiazes full of gas
    this.mpg = mpg // car initiazes with a mpg of miles per gallon
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {
    const originalOdometer = this.odometer;

    // checks if car has enough gas
    if (this.tank > 0) {
      this.tank -= distance / this.mpg;
      this.odometer += distance;
    }

    return this.odometer;
  }



  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    // ✨ implement
  }
}

  // TESTa
  const focus = new Car('focus', 20, 30)

  console.log("test", focus.drive(100));
  console.log("test", focus.drive(100));
  console.log("test", focus.drive(100));
  console.log("test", focus.drive(200))
  console.log("test", focus.drive(200))


/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 * isEvenNumberAsync('foo').catch(error => {
 *    // error.message is "number must be a number"
 * })
 * isEvenNumberAsync(NaN).catch(error => {
 *    // error.message is "number must be a number"
 * })
 */
function isEvenNumberAsync(number) {
  // check if numer is even
  // return a promise
 

}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
