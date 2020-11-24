import getMinGreaterLuminance from "./get-min-greater-luminance";

describe("getMinGreaterLuminance", () => {
  it("returns the lower luminance", () => {
    expect(getMinGreaterLuminance(3, 0.25)).toBeCloseTo(0.85);
  });

  it("returns undefined when the lower luminance is below 0", () => {
    expect(getMinGreaterLuminance(7, 0.8)).toBe(undefined);
  });
});
