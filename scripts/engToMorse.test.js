import convertToMorse from "./engToMorse.js";

describe("test cases for a function that converts english to morse code", () => {
  const invalidInput = new Error("Only accepts letters");

  it("Should convert valid english characters", () => {
    expect(convertToMorse("test")).toBe("- . ... - ");
    expect(convertToMorse("teST")).toBe("- . ... - ");
    expect(convertToMorse("testing two")).toBe(
      "- . ... - .. -. --.  - .-- --- "
    );
  });

  it("Should throw an error if not a valid character", () => {
    expect(() => {
      convertToMorse("...? ");
    }).toThrow(invalidInput);
    expect(() => {
      convertToMorse("1345 ");
    }).toThrow(invalidInput);
  });
});
