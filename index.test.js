const utils = require('./index');

describe('[Exercise 1] trimProperties', () => {
	it('[1] returns an object with the properties trimmed', () => {
		// EXAMPLE
		const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
		const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
		const actual = utils.trimProperties(input);
		expect(actual).toEqual(expected);
	});
	it('[2] returns a copy, leaving the original object intact', () => {
		// ✨ test away
		const input = { foo: ' foo ', bar: 'bar ', baz: ' baz' };
		const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
		const actual = utils.trimProperties(input);
		expect(actual).toEqual(expected);
		expect(actual).not.toEqual(input);
	});
});

describe('[Exercise 2] trimPropertiesMutation', () => {
	it('[3] returns an object with the properties trimmed', () => {
		// ✨ test away
		const input = { key: ' random string     ' };
		const expected = { key: 'random string' };
		const actual = utils.trimProperties(input);
		expect(actual).toEqual(expected);
	});
	it('[4] the object returned is the exact same one we passed in', () => {
		// ✨ test away
		const input = { key: ' random string     ' };
		const expected = { key: 'random string' };
		const actual = utils.trimProperties(input);
		expect(actual).toEqual(expected);
		expect(actual).toBe(input);
	});
});

describe('[Exercise 3] findLargestInteger', () => {
	it('[5] returns the largest number in an array of numbers', () => {
		// ✨ test away
		const input = [2, 1, 7, 3, 14, 7];
		const expected = 14;
		const actual = utils.findLargestInterger(input);
		expect(actual).toEqual(expected);
	});
});

describe('[Exercise 4] Counter', () => {
	let counter;
	beforeEach(() => {
		counter = new utils.Counter(3); // each test must start with a fresh couter
	});
	it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
		// ✨ test away
		const expected = 3;
		const actual = counter.countDown();
		expect(actual).toEqual(expected);
	});
	it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
		// ✨ test away
		const expected = 2;
		counter.countDown();
		const actual = counter.countDown();
		expect(actual).toEqual(expected);
	});
	it('[8] the count eventually reaches zero but does not go below zero', () => {
		// ✨ test away
		const expected = 0;
		const neg = -1;
		counter.countDown();
		counter.countDown();
		counter.countDown();
		const actual = counter.countDown();
		const actualNeg = counter.countDown();
		expect(actual).toEqual(expected);
		expect(actualNeg).not.toEqual(neg);
	});
});

describe('[Exercise 5] Seasons', () => {
	let seasons;
	beforeEach(() => {
		seasons = new utils.Seasons(); // each test must start with fresh seasons
	});
	it('[9] the FIRST call of seasons.next returns "summer"', () => {
		// ✨ test away
		const actual = seasons.next();
		const expected = 'summer';
		expect(actual).toEqual(expected);
	});
	it('[10] the SECOND call of seasons.next returns "fall"', () => {
		// ✨ test away
		seasons.next();
		const actual = seasons.next();
		const expected = 'fall';
		expect(actual).toEqual(expected);
	});
	it('[11] the THIRD call of seasons.next returns "winter"', () => {
		// ✨ test away
		seasons.next();
		seasons.next();
		const actual = seasons.next();
		const expected = 'winter';
		expect(actual).toEqual(expected);
	});
	it('[12] the FOURTH call of seasons.next returns "spring"', () => {
		// ✨ test away
		seasons.next();
		seasons.next();
		seasons.next();
		const actual = seasons.next();
		const expected = 'spring';
		expect(actual).toEqual(expected);
	});
	it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
		// ✨ test away
		seasons.next();
		seasons.next();
		seasons.next();
		seasons.next();
		const actual = seasons.next();
		const expected = 'summer';
		expect(actual).toEqual(expected);
	});
	it('[14] the 40th call of seasons.next returns "spring"', () => {
		// ✨ test away
		for (let i = 0; i < 40; i++) {
			seasons.next();
		}
		const actual = seasons.currentSeason;
		const expected = 'spring';
		expect(actual).toEqual(expected);
	});
});

describe('[Exercise 6] Car', () => {
	let focus;
	beforeEach(() => {
		focus = new utils.Car('focus', 20, 30); // each test must start with a fresh car
	});
	it('[15] driving the car returns the updated odometer', () => {
		// ✨ test away
		const actual = focus.drive(5);
		const expected = 5;
		expect(actual).toEqual(expected);
	});
	it('[16] driving the car uses gas', () => {
		// ✨ test away
	});
	it('[17] refueling allows to keep driving', () => {
		// ✨ test away
	});
	it('[18] adding fuel to a full tank has no effect', () => {
		// ✨ test away
	});
});

describe('[Exercise 7] isEvenNumberAsync', () => {
	it('[19] resolves true if passed an even number', () => {
		// ✨ test away
	});
	it('[20] resolves false if passed an odd number', () => {
		// ✨ test away
	});
	it('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
		// ✨ test away
	});
	it('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
		// ✨ test away
	});
});
