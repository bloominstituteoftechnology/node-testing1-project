const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  // test('[2] returns a copy, leaving the original object intact', () => {})
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { name: 'jane'}
    const expected = {name: 'jane'}
    expect(utils.trimProperties(input)).toEqual(expected)
    expect(utils.trimProperties(input)).not.toBe(input)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => { const input = {name:'james'}
    const expected = {name:'james'}
  test('[3] returns an object with the properties trimmed', () => {

    expect(utils.trimPropertiesMutation(input)).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    expect(utils.trimPropertiesMutation(input)).toEqual(expected)
  })

  describe('[Exercise 3] findLargestInteger', () => {const integers = [{integer:1, integer:2, integer:3}]
  test('[5] returns the largest number in an array of objects { integer: 3 }', () => {
  expect(utils.findLargestInteger(integers)).toBe(3)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(4) 
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toBe(4)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => { counter.countDown()
    expect(counter.countDown()).toEqual(3)
  })
 test('[8] the count eventually reaches zero but does not go below zero', () => {
     counter.countDown();
     counter.countDown();
     counter.countDown();
     counter.countDown();
    expect(counter.countDown()).toBe(0)
 })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns ""', () => {
    expect(seasons.next()).toBe('winter')
  })
test('[10] the SECOND call of seasons.next returns ""', () => {
  seasons.next()
  expect(seasons.next()).toBe('notspring')
})
  test('[11] the THIRD call of seasons.next returns "summer"', () => {
   seasons.next()
   seasons.next()
     expect(seasons.next()).toBe('summer')
  })
  test('[12] the FOURTH call of seasons.next returns "fall"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('fall')
  })
  test('[13] the FIFTH call of seasons.next returns again "winter"', () => {
   seasons.next()
   seasons.next()
   seasons.next()
   seasons.next()
   expect(seasons.next()).toBe('winter')
  })
  test('[14] the 40th call of seasons.next returns "fall"', () => {
    for(let i = 0; i < 39; i++){seasons.next()}
    expect(seasons.next()).toBe('fall')
  })
})
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => { focus.drive(150)
    expect(focus.drive(100)).toBe(250)

  })
  test('[16] driving the car uses gas', () => {
   focus.drive(600)
   expect(focus.tank).toBe(0)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(300)
    expect(focus.tank).toBe(10)
    focus.refuel(5)
    expect(focus.tank).toBe(15)
    focus.drive(300)
    expect(focus.tank).toBe(5)
  })
 test('[18] adding fuel to a full tank has no effect', () => {
   focus.drive(300)
   expect(focus.tank).toBe(10)
   focus.refuel(150)
   expect(focus.tank).toBe(20)
 })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    let result = await utils.isEvenNumberAsync(4)
    expect(result).toBe(true)
      })
     test('[20] resolves false if passed an odd number', async () => {
       let number = await utils.isEvenNumberAsync(5)
       expect(number).toBe(false)
     })
})
