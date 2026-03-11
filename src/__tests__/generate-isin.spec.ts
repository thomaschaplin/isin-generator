import { benchmark } from "kelonio";
import { generateIsin } from "../generate-isin";
import { generateCusip } from "@thomaschaplin/cusip-generator";
import { countryCodes } from "../fixtures/country-codes";

jest.mock("@thomaschaplin/cusip-generator", () => ({
  generateCusip: jest.fn(() => "037833100"),
}));

const mockGenerateCusip = generateCusip as jest.Mock;

describe("generate-isin", () => {
  beforeEach(() => {
    mockGenerateCusip.mockClear();
  });

  it("should generate a isin with a random country code", () => {
    const result = generateIsin();
    expect(result).toHaveLength(12);
  });

  it("should generate a isin with a fixed country code", () => {
    const result = generateIsin("US");
    expect(result).toHaveLength(12);
    expect(result.startsWith("US")).toBeTruthy();
  });

  it("should generate the correct check digit for a known US ISIN", () => {
    expect(generateIsin("US")).toBe("US0378331005");
  });

  it("should generate the correct check digit for a known GB ISIN", () => {
    expect(generateIsin("GB")).toBe("GB0378331002");
  });

  it("should generate different ISINs for different country codes", () => {
    expect(generateIsin("US")).not.toBe(generateIsin("GB"));
  });

  it("should treat country code as case insensitive", () => {
    expect(generateIsin("us")).toBe(generateIsin("US"));
  });

  it("should call generateCusip once per generateIsin call", () => {
    generateIsin("US");
    generateIsin("US");
    expect(mockGenerateCusip).toHaveBeenCalledTimes(2);
  });

  it("should contain known country codes", () => {
    expect(countryCodes).toContain("US");
    expect(countryCodes).toContain("GB");
    expect(countryCodes).toContain("DE");
    expect(countryCodes).toContain("JP");
    expect(countryCodes).toContain("FR");
  });

  it("generate-isin performance", async () => {
    await benchmark.record(
      "generate-isin",
      () => generateIsin(),
      { meanUnder: 1 },
    );
  });
});
