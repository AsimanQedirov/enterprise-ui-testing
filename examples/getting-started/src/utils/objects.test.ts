import { describe, expect, it } from "vitest";

describe("toBe" , () => {
    it.fails("objects should not be strictly equal", () => {
        expect({ a: 1, b: 2 }).toBe({ a: 1, b: 2 });
    });

    it.fails('arrays should not be strictly equal', () => {
        expect([1, 2, 3]).toBe([1, 2, 3]);
    });

    it.fails('function should not be strictly equal', () => {
        expect(() => {}).toBe(() => {});
    });
});

describe("toEqual", () => {
    it("objects should be deeply equal", () => {
        expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 });
    });

    it("arrays should be deeply equal", () => {
        expect([1, 2, 3]).toEqual([1, 2, 3]);
    });
    it("functions should be deeply equal", () => {
        const fn = () => {};
        expect(fn).toEqual(fn);
    });
});