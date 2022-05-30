// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe.only("substitution tests written by me", () => {
  it("should encode substitution", () => {
    const message = "today is a good day to stretch your legs";
    const alphabet = "qwertyuiopasdfghjklzxcvbnm";
    const actual = substitution(message, alphabet);
    const expected = "zgrqn ol q uggr rqn zg lzktzei ngxk stul";

    expect(actual).to.equal(expected);
  });

  it("should decode substitution", () => {
    const message = "zgrqn ol q uggr rqn zg lzktzei ngxk stul";
    const alphabet = "qwertyuiopasdfghjklzxcvbnm";
    const actual = substitution(message, alphabet, false);
    const expected = "today is a good day to stretch your legs";

    expect(actual).to.equal(expected);
  });

  it("should return false if the alphabet is invalid", () => {
    const message = "zgrqn ol q uggr rqn zg lzktzei ngxk stul";
    const alphabet = "435dfg";
    const actual = substitution(message, alphabet, false);

    expect(actual).to.be.false;
  });
});
