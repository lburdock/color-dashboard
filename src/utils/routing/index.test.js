import { getColorsFromSearchParams, formatColorSearchParams } from ".";

describe("Routing utils", () => {
  describe("getColorsFromSearchParams", () => {
    it("returns the color search params as an array", () => {
      const searchParams = "?hex=5BCFF3&hex=ee5bf3&hex=f3835b&hex=685bf3";
      const expected = ["#5BCFF3", "#ee5bf3", "#f3835b", "#685bf3"];
      expect(getColorsFromSearchParams(searchParams)).toEqual(expected);
    });

    it("handles no color search params", () => {
      const searchParams = "?a=b";
      const expected = [];
      expect(getColorsFromSearchParams(searchParams)).toEqual(expected);
    });

    it("handles no arguments", () => {
      const searchParams = undefined;
      const expected = [];
      expect(getColorsFromSearchParams(searchParams)).toEqual(expected);
    });
  });

  describe("formatColorSearchParams", () => {
    it("reformats the colors array correctly", () => {
      const colors = ["#5BCFF3", "#ee5bf3", "#f3835b", "#685bf3"];
      const expected = "?hex=5BCFF3&hex=ee5bf3&hex=f3835b&hex=685bf3";
      expect(formatColorSearchParams(colors)).toEqual(expected);
    });

    it("handles an empty array", () => {
      const colors = [];
      const expected = "?";
      expect(formatColorSearchParams(colors)).toEqual(expected);
    });

    it("handles undefined", () => {
      const colors = undefined;
      const expected = "?";
      expect(formatColorSearchParams(colors)).toEqual(expected);
    });
  });
});
