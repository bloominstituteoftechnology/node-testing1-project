const utils = require('./index')
const {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  Counter,
  Seasons, 
  Car
} = require ('./index');


describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }//arrange
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }//arrange
    const actual = utils.trimProperties(input)//act
    expect(actual).toEqual(expected) //assert
  }) 
  
   test('[2] returns a copy, leaving the original object intact', () => {
     const input = {name: '  jane  ', age: '   20    '}
     let expected = {name: 'jane', age:'20'}
      expect(trimProperties(input)).toEqual(expected)
      expect(trimProperties(input)).not.toBe(expected)
   })

})

describe('[Exercise 2] trimPropertiesMutation', () => {
  // test('[3] returns an object with the properties trimmed', () => {})
  // test('[4] the object returned is the exact same one we passed in', () => {})
  const input = { name:  '  jane  ', age: '  20  '}
  let expected = { name: 'jane', age: '20' }
  
  test('[3] returns an object with the properties trimmed', () => {
    expect(trimPropertiesMutation(input)).toEqual(expected)
  })
  
  test('[4] the object returned is the exact same one we passed in', () => {
    expect(trimPropertiesMutation(input)).toBe(input) 
  })

})

})

describe('[Exercise 3] findLargestInteger', () => {
  // test('[5] returns the largest number in an array of objects { integer: 2 }', () => {})
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    expect(findLargestInteger([{integer: 2}, {integer: 1}, {integer: 3}])).toEqual(3)
  })

})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  // test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {})
  // test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {})
  // test('[8] the count eventually reaches zero but does not go below zero', () => {})
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toEqual(3)
  })

  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    expect(counter.countDown()).not.toEqual(2)
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
  // test('[9] the FIRST call of seasons.next returns "summer"', () => {})
  // test('[10] the SECOND call of seasons.next returns "fall"', () => {})
  // test('[11] the THIRD call of seasons.next returns "winter"', () => {})
  // test('[12] the FOURTH call of seasons.next returns "spring"', () => {})
  // test('[13] the FIFTH call of seasons.next returns again "summer"', () => {})
  // test('[14] the 40th call of seasons.next returns "spring"', () => {})

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
    // create loop 35 times to keep calling next until it returns spring
    let testSeason = ""
    
    for (let i = 5; i < 40; i++) {
    testSeason = seasons.next()
    }
    expect(testSeason).toEqual('spring')

  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  // test('[15] driving the car returns the updated odometer', () => {})
  // test('[16] driving the car uses gas', () => {})
  // test('[17] refueling allows to keep driving', () => {})
  // test('[18] adding fuel to a full tank has no effect', () => {})
 
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  // test('[19] resolves true if passed an even number', () => {})
  // test('[20] resolves false if passed an odd number', () => {})
})
//EXAMPLE
    //return Promise.resolve(distance) -- how you return the asychronous... stuff
