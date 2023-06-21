import getAccessibleColorOptions from "./get-accessible-color-options";

describe("getAccessibleColorOptions", () => {
  it("returns a single color option", () => {
    const colors = ["#796b91", "#a4a0a0"];
    const contrast = 7;
    expect(getAccessibleColorOptions({ colors, contrast })).toEqual([
      { colors: ["#16131a", "#a4a0a0"], text: "Darker background color" },
    ]);
  });

  it("returns multiple color options when it can", () => {
    const colors = ["#796b91", "#a4a0a0"];
    const contrast = 3;
    expect(getAccessibleColorOptions({ colors, contrast })).toEqual([
      { colors: ["#796b91", "#cdcbcb"], text: "Lighter foreground color" },
      { colors: ["#564c67", "#a4a0a0"], text: "Darker background color" },
    ]);
  });

  it("returns the correct text for reversed colors", () => {
    const colors = ["#a4a0a0", "#796b91"];
    const contrast = 3;
    expect(getAccessibleColorOptions({ colors, contrast })).toEqual([
      { colors: ["#cdcbcb", "#796b91"], text: "Lighter background color" },
      { colors: ["#a4a0a0", "#564c67"], text: "Darker foreground color" },
    ]);
  });
});
