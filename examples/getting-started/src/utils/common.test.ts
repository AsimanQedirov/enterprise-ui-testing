import {describe , it , expect , test} from 'vitest';
import { getGreater , fizzBuzz, factarial, fetchData, fetchComplexData, rejectedData } from './common';

// Each test requires 3 steps: Arrange, Act, Assert

describe('checking greater number', () => {
    it('should return the greater number',() => {
        expect(getGreater(5 , 10)).toBe(10);
    });
    it('should return the greater number when both are equal',() => {
        expect(getGreater(10 , 10)).toBe(10);
    });
});

describe('fizz buzz' ,() => {
    test('it is fuzzbuzz' , () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
     test('it is fizz' , () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });
    test('it is buzz', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });
    test('it is not either' , () => {
        expect(fizzBuzz(11)).toBe('11')
    })
});

describe('factarial function', () => {
    test('number : 0 or 1' , (obj) => {
        expect(factarial(0)).toBe(1)
        expect(factarial(1)).toBe(1)
    });

     test('number : 2' , (obj) => {
        expect(factarial(2)).toBe(2)
    });

    test('number : 3' , (obj) => {
        expect(factarial(3)).toBe(6)
    });
});

// Demonstrate skip example
describe.skip('skipped test', () => {
    it.skip('should skip this test', () => {
        expect(2 + '1').toBe('11');
    });
    it.skip('should skip this test', () => {
        expect(4 + '1').toBe('11');
    });
});

// Expect assertions examples:

// toBe ( string , numbers , booleans , simple values)

// toEqual (Deep Equality) objects , arrays

describe('toEqual examples', () => {
    it('should compare objects deeply', () => {
        expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 });
    });

    it('should compare arrays deeply', () => {
        expect([1, 2, 3]).toEqual([1, 2, 3]);
    });

    it('should compare arrays nested deeply', () => {
        expect([1, 2, 3 , [4 , [5 , 6]]]).toEqual([1, 2, 3 , [4 , [5 , 6]]]);
    });
})

// toBeTruthy and toBeFalsy

describe('toBeTruthy and toBeFalsy examples', () => {
    it('should be truthy', () => {
        expect(true).toBeTruthy();
        expect(1).toBeTruthy();
        expect('hello').toBeTruthy();
    });

    it('should be falsy', () => {
        expect(false).toBeFalsy();
        expect(0).toBeFalsy();
        expect('').toBeFalsy();
    });
});

// toThrow
describe('toThrow examples', () => {
    it('should throw an error', () => {
        expect(() => {
            throw new Error('Error messages');
        }).toThrow('Error messages');
    });
});

describe('Resolve and Reject examples', () => {
    it("should resolve with primitive data", async () => {
        await expect(fetchData()).resolves.toBe('Finished')
    });
    it("should resolve with complex data", async () => {
        await expect(fetchComplexData()).resolves.toEqual(expect.objectContaining({
            status: expect.any(Number),
            data: expect.objectContaining({
                id: expect.any(Number),
                name: expect.any(String)
            }),
            message: expect.any(String)
        }))
    });
    it("should reject with primitive data", async () => {
        expect(rejectedData()).rejects.toThrow();
    })
})
