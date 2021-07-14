const utils = require('./index')


describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })

  test('[2] returns a copy, leaving the original object intact', () => {
  const input = {name: 'joe', age: '32'}
  const expected = {name: 'joe', age: '32'}
  expect(utils.trimProperties(input)).toEqual(expected)
  expect(utils.trimProperties(input)).not.toBe(input)
  })
  
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  const input = { name:  'Jake', age: '30'}
  let expected = { name: 'Jake', age: '30' }
  
  test('[3] returns an object with the properties trimmed', () => {
    expect(utils.trimPropertiesMutation(input)).toEqual(expected)
  })
  
  test('[4] the object returned is the exact same one we passed in', () => {
    expect(utils.trimPropertiesMutation(input)).toBe(input) 
  })

})


describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    expect(utils.findLargestInteger([{integer: 100}, {integer: 233}, {integer: 4}])).toBe(233)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh counter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toEqual(3)
  })

  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    expect(counter.countDown()).toEqual(2)
  })

  test('[8] the count eventually reaches zero but does not go below zero', () => {
    expect(counter.countDown()).toBeGreaterThanOrEqual(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })

  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toEqual('summer')
  })

  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    expect(seasons.next()).toEqual('fall')
  })

  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    expect(seasons.next()).toEqual('winter')
  })

  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    expect(seasons.next()).toEqual('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    expect(seasons.next()).toEqual('summer')
  })

  test('[14] the 40th call of seasons.next returns "spring"', () => {
    expect(seasons.next()).toEqual('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    // ✨ test away
    focus.drive(20)
    expect(focus.odometer).toBe(20)
  })
  test('[16] driving the car uses gas', () => {
    // ✨ test away
    focus.drive(30)
    //Miles per gallon 30 miles uses 1 gallon
    //Tank started at 20 should be 19 gallons left
    expect(focus.tank).toBe(19)
  })
  test('[17] refueling allows to keep driving', () => {
    // ✨ test away
    focus.drive(700)
    expect(focus.odometer).toBe(600)
    focus.refuel(20)
    focus.drive(100)
    expect(focus.odometer).toBe(700)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    // ✨ test away
    focus.refuel(10)
    expect(focus.tank).toBe(20)
    focus.drive(600)
    focus.refuel(30)
    expect(focus.tank).toBe(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async() => {
    // ✨ test away
    const num = await utils.isEvenNumberAsync(2)
    expect(num).toBe(true)
  })
  test('[20] resolves false if passed an odd number', async () => {
    // ✨ test away
    const num = await utils.isEvenNumberAsync(1)
    expect(num).toBe(false)
  })
  test('[21] rejects an error with the message "number must be a number" if passed a non-number type', async () => {
    // ✨ test away
    const num = await utils.isEvenNumberAsync("momma")
    expect(num).toBe(false)
  })
  test('[22] rejects an error with the message "number must be a number" if passed NaN', async () => {
    // ✨ test away
    const num = await utils.isEvenNumberAsync(NaN)
    expect(num).toBe(false)
  })
})
