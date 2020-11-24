import { getLuminance } from "polished";
import findColorWithLuminance from "./find-color-with-luminance";

describe("findColorWithLuminance", () => {
  it("returns the correct color when the target luminance is lower than the color's luminance", () => {
    const targetLuminance = 0.1;
    const color = findColorWithLuminance("#796b91", targetLuminance);
    expect(getLuminance(color)).toBeLessThanOrEqual(targetLuminance);
  });

  it("returns the correct color when the target luminance is higher than the color's luminance", () => {
    const targetLuminance = 0.2;
    const color = findColorWithLuminance("#796b91", targetLuminance);
    expect(getLuminance(color)).toBeGreaterThanOrEqual(targetLuminance);
  });

  it("returns white", () => {
    expect(findColorWithLuminance("#f5f5f5", 0.98)).toBe("#fff");
  });

  it("handles targetLuminance = 0 edge case", () => {
    expect(findColorWithLuminance("#796b91", 0)).toBe("#000");
  });

  it("handles targetLuminance = 1 edge case", () => {
    expect(findColorWithLuminance("#796b91", 1)).toBe("#fff");
  });
});
