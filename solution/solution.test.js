const solution = require('../index');
describe("solution", () => {
    it("returns the correct dictionary for a simple example", () => {
      const input = {
        "2020-01-01": 4,
        "2020-01-02": 4,
        "2020-01-03": 6,
        "2020-01-04": 8,
        "2020-01-05": -2,
        "2020-01-06": -6,
        "2020-01-07": 2,
        "2020-01-08": -2,
      };
      const expectedOutput = {
        Mon: -6,
        Tue: 2,
        Wed: 2,
        Thu: 4,
        Fri: 6,
        Sat: 8,
        Sun: -2,
      };
      const actualOutput = solution(input);
      console.log('actualOutput :', actualOutput);
      expect(actualOutput).toEqual(expectedOutput);
    });
  
    it("returns the correct dictionary when there are missing days", () => {
      const input = {
        "2020-01-01": 6,
        "2020-01-04": 12,
        "2020-01-05": 14,
        "2020-01-06": 2,
        "2020-01-07": 4,
      };
      const expectedOutput = {
        Mon: 2,
        Tue: 4,
        Wed: 6,
        Thu: 9,
        Fri: 10,
        Sat: 12,
        Sun: 14,
      };
      const actualOutput = solution(input);
      console.log('actualOutput :', actualOutput);
      expect(actualOutput).toEqual(expectedOutput);
    });
  });
  