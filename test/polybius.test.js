// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius tests written by me", () => {
  it("should encode polybius", () => {
    const message = "today is a good day to stretch your legs";
    const actual = polybius(message);
    const expected =
      "4443411145 4234 11 22434341 411145 4443 34442451443132 45435424 13512234";

    expect(actual).to.equal(expected);
  });

  it("should decode polybius", () => {
    const message =
      "4443411145 4234 11 22434341 411145 4443 34442451443132 45435424 13512234";
    const actual = polybius(message, false);
    const expected = "today (i/j)s a good day to stretch your legs";

    expect(actual).to.equal(expected);
  });
});
