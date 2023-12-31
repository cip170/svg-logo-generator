const {Circle, Triangle, Square} = require('../shapes');

// Testing the Circle class
describe('Circle', () => {
    test("should render svg for a green circle", () => {
        const expectedSvg = `<circle cx="150" cy="100" r="80" fill="green" />`;
        const circle = new Circle();
        circle.setColor("green");
        const actualSvg = circle.render();
        console.log(actualSvg, expectedSvg); // Logging the actual and expected SVG for comparison
        expect(actualSvg).toEqual(expectedSvg); // Asserting that the actual SVG matches the expected SVG
    });
});

// Testing the Triangle class
describe('Triangle', () => {
  test("should render svg for a green triangle", () => {
      const expectedSvg = `<polygon points="150, 18 244, 182 56, 182" fill="green" />`;
      const triangle = new Triangle();
      triangle.setColor("green");
      const actualSvg = triangle.render();
      console.log(actualSvg, expectedSvg); // Logging the actual and expected SVG for comparison
      expect(actualSvg).toEqual(expectedSvg); // Asserting that the actual SVG matches the expected SVG
  });
});

// Testing the Square class
describe('Square', () => {
  test("should render svg for a green square", () => {
      const expectedSvg = `<rect x="90" y="40" width="120" height="120" fill="green" />`;
      const square = new Square();
      square.setColor("green");
      const actualSvg = square.render();
      console.log(actualSvg, expectedSvg); // Logging the actual and expected SVG for comparison
      expect(actualSvg).toEqual(expectedSvg); // Asserting that the actual SVG matches the expected SVG
  });
});