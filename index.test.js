const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  let input;
  let expected;
  let actual;

  beforeEach(() => {
    input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    expected = { foo: "foo", bar: "bar", baz: "baz" };
    actual = utils.trimProperties(input);
  });

  it("[1] returns an object with the properties trimmed", () => {
    expect(actual).toEqual(expected);
  });
  it("[2] returns a copy, leaving the original object intact", () => {
    expect(actual).not.toEqual(input);
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  let input;
  let expected;
  let actual;

  beforeEach(() => {
    input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    expected = { foo: "foo", bar: "bar", baz: "baz" };
    actual = utils.trimPropertiesMutation(input);
  });

  it("[3] returns an object with the properties trimmed", () => {
    expect(actual).toEqual(expected);
  });
  it("[4] the object returned is the exact same one we passed in", () => {
    expect(actual).toBe(input);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  it("[5] returns the largest number in an array of numbers", () => {
    const numbers = [1, 5, 2, 3];
    expect(utils.findLargestInteger(numbers)).toEqual(5);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh counter
  });
  it("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    expect(counter.countDown()).toEqual(3);
  });
  it("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    counter.countDown();
    expect(counter.countDown()).toEqual(2);
  });
  it("[8] the count eventually reaches zero but does not go below zero", () => {
    for (let i = 1; i < 6; i++) counter.countDown();
    expect(counter.countDown()).toEqual(0);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeAll(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toEqual("summer");
  });
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    expect(seasons.next()).toEqual("fall");
  });
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    expect(seasons.next()).toEqual("winter");
  });
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    expect(seasons.next()).toEqual("spring");
  });
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    expect(seasons.next()).toEqual("summer");
  });
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 5; i < 39; i++) seasons.next();
    expect(seasons.next()).toEqual("spring");
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  it("[15] driving the car returns the updated odometer", () => {
    focus.drive(5);
    expect(focus.odometer).toBe(5);
  });
  it("[16] driving the car uses gas", () => {
    focus.drive(30);
    expect(focus.fuel).toBeLessThan(20);
  });
  it("[17] refueling allows to keep driving", () => {
    focus.drive(30 * 20);
    expect(focus.fuel).toEqual(0);
    focus.refuel(20);
    focus.drive(30);
    expect(focus.fuel).toBeGreaterThan(0);
    expect(focus.odometer).toBeGreaterThan(30 * 20);
  });
  it("[18] adding fuel to a full tank has no effect", () => {
    focus.refuel(10);
    expect(focus.fuel).toEqual(20);
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  it("[19] resolves true if passed an even number", async () => {
    expect(await utils.isEvenNumberAsync(2)).toBe(true);
  });
  it("[20] resolves false if passed an odd number", async () => {
    expect(await utils.isEvenNumberAsync(3)).toBe(false);
  });
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', async () => {
    expect(await utils.isEvenNumberAsync("hello")).toMatch(/number must be a number/i);
  });
  it('[22] rejects an error with the message "number must be a number" if passed NaN', async () => {
    expect(await utils.isEvenNumberAsync(NaN)).toMatch(/number must be a number/i);
  });
});