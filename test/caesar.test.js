const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar tests written by me", () => {
  it("should shift by highest positive value", () => {
    const message = "hello world";
    const shift = 25;
    const actual = caesar(message, shift);
    const expected = "gdkkn vnqkc";

    expect(actual).to.equal(expected);
  });

  it("should shift by lowest negative value", () => {
    const message = "hello world";
    const shift = -25;
    const actual = caesar(message, shift);
    const expected = "ifmmp xpsme";

    expect(actual).to.equal(expected);
  });

  it("should return false if shift is greater than highest positive value", () => {
    const message = "hello world";
    const shift = 26;

    expect(caesar(message, shift)).to.be.false;
  });

  it("should return false if shift is lower than lowest negative value", () => {
    const message = "hello world";
    const shift = -26;

    expect(caesar(message, shift)).to.be.false;
  });

  it("should encode long sentences", () => {
    const message = "today is a good day to stretch your legs";
    const shift = 10;
    const actual = caesar(message, shift);
    const expected = "dynki sc k qyyn nki dy cdbodmr iyeb voqc";

    expect(actual).to.equal(expected);
  });
});
