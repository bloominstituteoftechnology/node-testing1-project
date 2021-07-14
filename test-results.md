Test Suites: 1 failed, 1 total
 FAIL  ./index.test.js
  [Exercise 1] trimProperties
    √ [1] returns an object with the properties trimmed (4 ms)
    √ [2] returns a copy, leaving the original object intact (1 ms)
  [Exercise 2] trimPropertiesMutation
    √ [3] returns an object with the properties trimmed (1 ms)
    √ [4] the object returned is the exact same one we passed in (1 ms)
  [Exercise 3] findLargestInteger
    √ [5] returns the largest number in an array of objects 
{ integer: 2 } (1 ms)
  [Exercise 4] Counter
    √ [6] the FIRST CALL of counter.countDown returns the initial count (1 ms)
    × [7] the SECOND CALL of counter.countDown returns the initial count minus one (4 ms)
    √ [8] the count eventually reaches zero but does not go 
below zero
  [Exercise 5] Seasons
    √ [9] the FIRST call of seasons.next returns "summer"   
    × [10] the SECOND call of seasons.next returns "fall" (4 ms)
    × [11] the THIRD call of seasons.next returns "winter" (1 ms)
    × [12] the FOURTH call of seasons.next returns "spring" 
(1 ms)
    √ [13] the FIFTH call of seasons.next returns again "summer" (1 ms)
    × [14] the 40th call of seasons.next returns "spring" (1 ms)
  [Exercise 6] Car
    √ [15] driving the car returns the updated odometer     
    √ [16] driving the car uses gas
    √ [17] refueling allows to keep driving (2 ms)
    √ [18] adding fuel to a full tank has no effect
  [Exercise 7] isEvenNumberAsync
    √ [19] resolves true if passed an even number (1 ms)    
    √ [20] resolves false if passed an odd number (1 ms)    
    √ [21] rejects an error with the message "number must be a number" if passed a non-number type (1 ms)
    √ [22] rejects an error with the message "number must be a number" if passed NaN

  ● [Exercise 4] Counter › [7] the SECOND CALL of counter.countDown returns the initial count minus one

    expect(received).toEqual(expected) // deep equality     

    Expected: 2
    Received: 3

      51 |
      52 |   test('[7] the SECOND CALL of counter.countDown 
returns the initial count minus one', () => {
    > 53 |     expect(counter.countDown()).toEqual(2)       
         |                                 ^
      54 |   })
      55 |
      56 |   test('[8] the count eventually reaches zero but does not go below zero', () => {

      at Object.<anonymous> (index.test.js:53:33)

  ● [Exercise 5] Seasons › [10] the SECOND call of seasons.next returns "fall"

    expect(received).toEqual(expected) // deep equality     

    Expected: "fall"
    Received: "summer"

      70 |
      71 |   test('[10] the SECOND call of seasons.next returns "fall"', () => {
    > 72 |     expect(seasons.next()).toEqual('fall')       
         |                            ^
      73 |   })
      74 |
      75 |   test('[11] the THIRD call of seasons.next returns "winter"', () => {

      at Object.<anonymous> (index.test.js:72:28)

  ● [Exercise 5] Seasons › [11] the THIRD call of seasons.next returns "winter"

    expect(received).toEqual(expected) // deep equality     

    Expected: "winter"
    Received: "summer"

      74 |
      75 |   test('[11] the THIRD call of seasons.next returns "winter"', () => {
    > 76 |     expect(seasons.next()).toEqual('winter')     
         |                            ^
      77 |   })
      78 |
      79 |   test('[12] the FOURTH call of seasons.next returns "spring"', () => {

      at Object.<anonymous> (index.test.js:76:28)

  ● [Exercise 5] Seasons › [12] the FOURTH call of seasons.next returns "spring"

    expect(received).toEqual(expected) // deep equality     

    Expected: "spring"
    Received: "summer"

      78 |
      79 |   test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    > 80 |     expect(seasons.next()).toEqual('spring')     
         |                            ^
      81 |   })
      82 |   test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
      83 |     expect(seasons.next()).toEqual('summer')     

      at Object.<anonymous> (index.test.js:80:28)

  ● [Exercise 5] Seasons › [14] the 40th call of seasons.next returns "spring"

    expect(received).toEqual(expected) // deep equality     

    Expected: "spring"
    Received: "summer"

      85 |
      86 |   test('[14] the 40th call of seasons.next returns "spring"', () => {
    > 87 |     expect(seasons.next()).toEqual('spring')     
         |                            ^
      88 |   })
      89 | })
      90 |

      at Object.<anonymous> (index.test.js:87:28)

Test Suites: 1 failed, 1 total
Tests:       5 failed, 17 passed, 22 total
Snapshots:   0 total
Time:        0.726 s, estimated 1 s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.