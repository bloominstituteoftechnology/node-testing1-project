/* eslint-disable */
const utils = require("./index");

// test("works great", () => {
//   //empty test
// });

describe("[Exercise 1] trimProperties", () => {
  test("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });

  test("[2] returns a copy, leaving the original object intact", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    utils.trimProperties(input);
    expect(input).toEqual({ foo: "  foo ", bar: "bar ", baz: " baz" });
  });
});

// describe("[Exercise 2] trimPropertiesMutation", () => {
// test("[3] returns an object with the properties trimmed", () => {
//   // expect();
// });
// test("[4] the object returned is the exact same one we passed in", () => {
//   // expect();
// });
// });

describe("[Exercise 3] findLargestInteger", () => {
  // test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
  // expect();
  // });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh counter
  });
  // test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
  // expect();
  // });
  // test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
  // expect();
  // });
  // test("[8] the count eventually reaches zero but does not go below zero", () => {
  // expect();
  // });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  // test('[9] the FIRST call of seasons.next returns "summer"', () => {})
  // test('[10] the SECOND call of seasons.next returns "fall"', () => {})
  // test('[11] the THIRD call of seasons.next returns "winter"', () => {})
  // test('[12] the FOURTH call of seasons.next returns "spring"', () => {})
  // test('[13] the FIFTH call of seasons.next returns again "summer"', () => {})
  // test('[14] the 40th call of seasons.next returns "spring"', () => {})
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  test("[B] has an odometer initialized at zero", () => {
    expect(focus.odometer).toBe(0);
  });
  test("[15] driving the car returns the updated odometer", () => {
    focus.drive(100);
    focus.drive(200);
    focus.drive(300);

    expect(focus.odometer).toBe(600);
  });
  test("[16] driving the car uses gas", () => {
    const actualGallons = focus.drive(600);
    // const expectedGallons = 10;
    expect(actualGallons).toBe(10);
  });
  test("[17] refueling allows to keep driving", () => {
    expect();
  });
  test("[18] adding fuel to a full tank has no effect", () => {
    expect();
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  test("[19] resolves true if passed an even number", async () => {
    const evenNr = await Promise.resolve(true);
    expect(evenNr).toBe(true);
  });

  test("[20] resolves false if passed an odd number", async () => {
    const oddNr = await Promise.resolve(false);
    expect(oddNr).toBe(false);
  });
});
