const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  it('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  it('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimProperties(input)
    expect(actual).not.toEqual(input)
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  it('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(expected).toEqual(actual)
  })
  test.todo('[4] the object returned is the exact same one we passed in')
})

describe('[Exercise 3] findLargestInteger', () => {
  it('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const array = [100, 20, 27]
    const expected = 100
    expect(utils.findLargestInteger(array)).toBe(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh counter
  })
  it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toBe(3)
    expect(counter.countDown()).not.toBe(4)
  })
  it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    expect(counter.countDown()).toBe(2)
    //sanity check
    //expect(counter.countDown()).toBe(5)
  })
  it('[8] the count eventually reaches zero but does not go below zero', () => {
    for (var i = 1; i <= 4; ++i) {
      counter.countDown(i);
  }
    expect(counter.countDown()).toBe(0)
    expect(counter.countDown()).not.toBe(-1)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe("summer")
  })
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    for (var i = 1; i <= 1; ++i) {
      seasons.next(i);
  }
    expect(seasons.next()).toBe("fall")
  })
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    for (var i = 1; i <= 2; ++i) {
      seasons.next(i);
  }
    expect(seasons.next()).toBe("winter")
  })
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    for (var i = 1; i <= 3; ++i) {
      seasons.next(i);
  }
    expect(seasons.next()).toBe("spring")
  })
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    for (var i = 1; i <= 4; ++i) {
      seasons.next(i);
  }
    expect(seasons.next()).toBe("summer")
  })
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    for (var i = 1; i <= 39; ++i) {
      seasons.next(i);
  }
    expect(seasons.next()).toBe("spring")
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  it('[15] driving the car returns the updated odometer', () => {
    focus.drive(20)
    expect(focus.odometer).toBe(20)
  })
  it('[16] driving the car uses gas', () => {
    focus.drive(10)
    expect(focus.tank).toBeLessThan(20)
    expect(focus.tank).not.toBe(20)
    expect(focus.tank).not.toBe(30)
  })
  test.todo('[17] refueling allows to keep driving')
  test.todo('[18] adding fuel to a full tank has no effect')
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  it('[19] resolves true if passed an even number', async () => {
    expect(await utils.isEvenNumberAsync(10)).toBe(true)
  })
  it('[20] resolves false if passed an odd number', async () => {
    expect(await utils.isEvenNumberAsync(13)).toBe(false)
  })
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
    expect(() => utils.isEvenNumberAsync("hello error")).toThrow(Error)
  })
  it('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
    expect(() => utils.isEvenNumberAsync(NaN)).toThrow(Error)
  })
})
})