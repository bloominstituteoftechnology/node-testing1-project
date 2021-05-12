const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    let input = {}
    let expected = {}

    beforeEach(() => {
      input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
      expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    })

    it('[1] returns an object with the properties trimmed', () => {
      const actual = util.trimProperties(input)
      expect(actual).toEqual(expected)
    })
    it('[2] returns a copy, leaving the original object intact', () => {
      const copyObject = utils.trimProperties(input)
      expect(input).not.toEqual(copyObject)
    })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  let input = {}
  let expected = {}

  beforeEach(() => {
    input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
  })

  it.todo('[3] returns an object with the properties trimmed', () => {
    const mutation = utils.trimPropertiesMutation(input)
    expect(input).toEqual(mutation)
  })
  it.todo('[4] the object returned is the exact same one we passed in', () => {
    const mutation = utils.trimPropertiesMutation(input)
    expect(input).toBe(mutation)
    expect(input).toEqual(mutation)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  it('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const array = [1, 2, 3, 4, 5, 6]
    const expected = utils.findLargestInteger(array)
    expect(expect).toEqual(6)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    let expected = 3

    expect(counter.countDown()).toBe(expected)
  })
  it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    let expected = 2
    counter.countDown()
    expect(counter.countDown()).toBe(expected)
  })
  it('[8] the count eventually reaches zero but does not go below zero', () => {
    let expected = 0
    for (let i = 0; i < 50; i++) {
      counter.countDown
    }

    expect(counter.countDown()).toBe(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toMatch('summer')
  })
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    for (let i = 0; i < 1; i++) {
      seasons.next()
    }
  })
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    
  })
  it('[12] the FOURTH call of seasons.next returns "spring"')
  it('[13] the FIFTH call of seasons.next returns again "summer"')
  it('[14] the 40th call of seasons.next returns "spring"')
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  it('[15] driving the car returns the updated odometer')
  it('[16] driving the car uses gas')
  it('[17] refueling allows to keep driving')
  it('[18] adding fuel to a full tank has no effect')
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  it('[19] resolves true if passed an even number')
  it('[20] resolves false if passed an odd number')
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type')
  it('[22] rejects an error with the message "number must be a number" if passed NaN')
})
