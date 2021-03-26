const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  let input;
  let expected;
  let actual;

  beforeEach(() => {
    input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    expected = { foo: "foo", bar: "bar", baz: "baz" };
    actual = utils.trimProperties(input);
  });

  it('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    expect(actual).toEqual(expected)
  })
  it('[2] returns a copy, leaving the original object intact', () => {
    // ✨ test away
    expect(actual).not.toEqual(input)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  let input;
  let expected;
  let actual;

  beforeEach(() => {
    input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    expected = { foo: "foo", bar: "bar", baz: "baz" };
    actual = utils.trimPropertiesMutation(input);
  });

  it('[3] returns an object with the properties trimmed', () => {
    // ✨ test away
    expect(actual).toEqual(expected)
  })
  it('[4] the object returned is the exact same one we passed in', () => {
    // ✨ test away
    expect(actual).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  it('[5] returns the largest number in an array of numbers', () => {
    // ✨ test away
    const input = [1,2,3,4,5,6]
    const expected = 6
    const actual = utils.findLargestInteger(input)

    expect(expected).toBe(actual)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    // ✨ test away
    expect(counter.countDown()).toEqual(3)
  })
  it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    // ✨ test away
    counter.countDown()
    expect(counter.countDown()).toEqual(2) //should return 2
  })
  it('[8] the count eventually reaches zero but does not go below zero', () => {
    // ✨ test away
    let result; // 4
    for (let i=0; i<5; i++) {
      result = counter.countDown()
      // i = 0, result = 3
      // i = 1, result = 2
      // i = 2, result = 1
      // i = 3, result = 0
      // i = 4, result = 0 
    }
    expect(result).toEqual(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    // ✨ test away
    expect(seasons.next()).toBe('summer')
  })
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    // ✨ test away
    seasons.next()
    expect(seasons.next()).toBe('fall')
  })
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    // ✨ test away
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('winter')
  })
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    // ✨ test away
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('spring')
  })
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    // ✨ test away
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('summer')
  })
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    // ✨ test away
    for (let call=1; call < 40; call++) {
      seasons.next()
    } expect(seasons.next()).toBe('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  it('[15] driving the car returns the updated odometer', () => {
    // ✨ test away
  })
  it('[16] driving the car uses gas', () => {
    // ✨ test away
  })
  it('[17] refueling allows to keep driving', () => {
    // ✨ test away
  })
  it('[18] adding fuel to a full tank has no effect', () => {
    // ✨ test away
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  it('[19] resolves true if passed an even number', () => {
    // ✨ test away
  })
  it('[20] resolves false if passed an odd number', () => {
    // ✨ test away
  })
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
    // ✨ test away
  })
  it('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
    // ✨ test away
  })
})
