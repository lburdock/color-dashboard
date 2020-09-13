import { parseToHslFormatted } from ".";

describe("parseToHslFormatted", () => {
  it("correctly formats the hsl values", () => {
    const colorString = "#5BCFF3";
    const expected = { hue: 194, saturation: 86, lightness: 65 };
    expect(parseToHslFormatted(colorString)).toEqual(expected);
  });
});
