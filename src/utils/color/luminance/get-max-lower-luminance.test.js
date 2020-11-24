import getMaxLowerLuminance from "./get-max-lower-luminance";

describe("getMaxLowerLuminance", () => {
  it("returns the lower luminance", () => {
    expect(getMaxLowerLuminance(3, 0.85)).toBeCloseTo(0.25);
  });

  it("returns undefined when the lower luminance is below 0", () => {
    expect(getMaxLowerLuminance(7, 0.2)).toBe(undefined);
  });
});
