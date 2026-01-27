import {describe , it , expect} from 'vitest';
import { getGreater } from './common';

// Each test requires 3 steps: Arrange, Act, Assert

describe('common utils', () => {
    it('should return the greater number',() => {
        expect(getGreater(5 , 10)).toBe(10);
    });
    it('should return the greater number when both are equal',() => {
        expect(getGreater(10 , 10)).toBe(10);
    })
});