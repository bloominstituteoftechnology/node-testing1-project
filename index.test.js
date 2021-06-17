const utils = require('./index');

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test('[2] returns a copy, leaving the original object intact' , () => {
    const input = { foo: 'foo  ', bar: ' bar ', baz: '  baz' };
    utils.trimProperties(input);
    const output = { foo: 'foo', bar: 'bar', baz: 'baz' };
    expect(input).not.toEqual(output);
  });
});

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  });
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    utils.trimPropertiesMutation(input);
    const output = { foo: 'foo', bar: 'bar', baz: 'baz' };
    expect(input).toEqual(output);
  });
});

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const integers = [
      {integer: 1},
      {integer: 2},
      {integer: 5}
    ];
    const largest = utils.findLargestInteger(integers);
    expect(largest).toBe(5);
  });

  test('[5a] returns the largest number in an array of objects { integer: 2 }', () => {
    const integers = [
      {integer: 4},
      {integer: 2},
      {integer: 5},
      {integer: 5},
      {integer: 17},
      {integer: 17},
    ];
    const largest = utils.findLargestInteger(integers);
    expect(largest).toBe(17);
  });
});

describe('[Exercise 4] Counter', () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const count = counter.countDown();
    expect(count).toBe(3);
  });
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown();
    const count = counter.countDown();
    expect(count).toBe(2);
  });
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown();
    counter.countDown();
    counter.countDown();
    counter.countDown();
    counter.countDown();
    const count = counter.countDown();
    expect(count).toBe(0);
  });
});

describe('[Exercise 5] Seasons', () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const season = seasons.next();
    expect(season).toBe("summer");
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next();
    const season = seasons.next();
    expect(season).toBe("fall");
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    let season;
    for (let i = 0; i<3; i++) {
      season = seasons.next();
    }
    expect(season).toBe("winter");
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    let season;
    for (let i = 0; i<4; i++) {
      season = seasons.next();
    }
    expect(season).toBe("spring");
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    let season;
    for (let i = 0; i<5; i++) {
      season = seasons.next();
    }
    expect(season).toBe("summer");
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let season;
    for (let i = 0; i<40; i++) {
      season = seasons.next();
    }
    expect(season).toBe("spring");
  });
});

describe('[Exercise 6] Car', () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30); // each test must start with a fresh car
  });
  test('[15] driving the car returns the updated odometer', () => {
    focus.drive(10);
    expect(focus.odometer).toBe(10);
  });
  test('[16] driving the car uses gas', () => {
    focus.drive(30);
    const gasLeft = 19; //30 miles at 30 mpg uses 1 gallon. Tank holds 20;
    expect(focus.fuel).toBe(gasLeft);
  });
  test('[17] refueling allows to keep driving', () => {
    focus.drive(610); //run out of gas
    expect(focus.odometer).toBe(600); //600 max miles on tank
    focus.drive(1);
    expect(focus.odometer).toBe(600);
    focus.refuel(100); //fills tank
    focus.drive(610); //full tank only goes 600 miles.
    expect(focus.odometer).toBe(1200);
  });
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(200);
    expect(focus.fuel).toBe(20); //20 is tank size;
  });
});

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const evenNumber = 4;
    const result = await utils.isEvenNumberAsync(evenNumber);
    expect(result).toBe(true);
  });
  test('[20] resolves false if passed an odd number', async () => {
    const oddNumber = 5;
    const result = await utils.isEvenNumberAsync(oddNumber);
    expect(result).toBe(false);
  });
  test('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
    const string = "5";
    utils.isEvenNumberAsync(string)
      .then()
      .catch(err => {
        expect(err).toBe("number must be a number");
      });
  });
  test('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
    utils.isEvenNumberAsync(NaN)
      .then()
      .catch(err => {
        expect(err).toBe("number must be a number");
      });
  });
});