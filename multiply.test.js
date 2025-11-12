const multiply = require('./multiply');

test("Multiply 3 by 4 to equal 12", () => {
    expect(multiply(3,4)).toBe(12);
}); 

test("Multiply -2 by 5 to equal -10", () => {
    expect(multiply(-2,5)).toBe(-10);
});