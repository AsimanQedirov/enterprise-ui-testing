import { it , expect, describe } from "vitest";

it("it will fixed" , () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
});

describe('instanceOf' , () => {
    it("object instaceOf" , () => {
        expect.hasAssertions();
        expect({}).toBeInstanceOf(Object)
    });
})

describe("contains" , () => {
    it("should include a string" , () => {
        expect.hasAssertions();
        expect("hello world").toContain("world");
    });
    it("should not include a string" , () => {
        expect.hasAssertions();
        expect("hello world").not.toContain("hi");
    });
})