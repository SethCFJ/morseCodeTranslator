import convertToEnglish from "./morseToEng.js";

describe("test cases for a function that converts morse code to english", () => {
  const invalidMorse = new Error("Invalid morse input");

  it("Should convert valid morse", () => {
    expect(convertToEnglish("... .-.")).toBe("SR");
    expect(convertToEnglish("... ... .")).toBe("SSE");
    expect(convertToEnglish("-. .-- .")).toBe("NWE");
  });

  it("Should throw an error if not valid morse", () => {
    expect(() => {
      convertToEnglish("T E S T");
    }).toThrow(invalidMorse);
    expect(() => {
      convertToEnglish("1345");
    }).toThrow(invalidMorse);
  });
});
