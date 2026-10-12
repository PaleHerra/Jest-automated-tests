import { divide } from "../src/calculator.js";

describe("divide", () => {
    it('divides two positive numbers', () => {
        expect(divide(4,2)).toBe(2);
    });

    it('divide with zero', () => {
        expect(() => divide(2,0)).toThrow("Division by zero is not allowed");
    });

    it('divide with letters', () => {
        expect(() => divide("a","b")).toThrow("Both arguments must be numbers");
    });

    it('divide with letters', () => {
        expect(() => divide(10 ,"5")).toThrow("Both arguments must be numbers");
    });

    it('divide with NaN', () => {
        expect(() => divide(6,NaN)).toThrow("Arguments cannot be NaN");
    });

    
});