const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  it('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  it.todo('[2] returns a copy, leaving the original object intact')
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  it.todo('[3] returns an object with the properties trimmed')
  it.todo('[4] the object returned is the exact same one we passed in')
})

describe('[Exercise 3] findLargestInteger', () => {
  it.todo('[5] returns the largest number in an array of objects { integer: 2 }')
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  it.todo('[6] the FIRST CALL of counter.countDown returns the initial count')
  it.todo('[7] the SECOND CALL of counter.countDown returns the initial count minus one')
  it.todo('[8] the count eventually reaches zero but does not go below zero')
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  it.todo('[9] the FIRST call of seasons.next returns "summer"')
  it.todo('[10] the SECOND call of seasons.next returns "fall"')
  it.todo('[11] the THIRD call of seasons.next returns "winter"')
  it.todo('[12] the FOURTH call of seasons.next returns "spring"')
  it.todo('[13] the FIFTH call of seasons.next returns again "summer"')
  it.todo('[14] the 40th call of seasons.next returns "spring"')
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  it.todo('[15] driving the car returns the updated odometer')
  it.todo('[16] driving the car uses gas')
  it.todo('[17] refueling allows to keep driving')
  it.todo('[18] adding fuel to a full tank has no effect')
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  it.todo('[19] resolves true if passed an even number')
  it.todo('[20] resolves false if passed an odd number')
  it.todo('[21] rejects an error with the message "number must be a number" if passed a non-number type')
  it.todo('[22] rejects an error with the message "number must be a number" if passed NaN')
})
