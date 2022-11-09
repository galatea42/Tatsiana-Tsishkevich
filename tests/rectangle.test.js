import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle"

test('Calculate perimeter of a rectangle', () => {
    const output = getRectanglePerimeter (3, 4);
    expect(output).toBe(14);
});

test('Calculate area of a rectangle', () => {
    const output = getRectangleArea (4, 2);
    expect(output).toBe(8);
});

test('Info about rectangle', ()=> {
    console.log = jest.fn();
    getRectangleInfo(4, 6);
    expect(console.log).toHaveBeenCalledWith(`The perimeter of a rectangle is 20 and the area is 24`);
});


