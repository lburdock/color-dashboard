import getAccessibleColorOptions from "./get-accessible-color-options";

describe("getAccessibleColorOptions", () => {
  it("returns multiple color options when it can", () => {
    const colors = ["#796b91", "#a4a0a0"];
    const contrast = 3;
    expect(getAccessibleColorOptions({ colors, contrast })).toEqual([
      ["#796b91", "#cdcbcb"],
      ["#564c67", "#a4a0a0"],
    ]);
  });

  it("returns a single color option", () => {
    const colors = ["#796b91", "#a4a0a0"];
    const contrast = 7;
    expect(getAccessibleColorOptions({ colors, contrast })).toEqual([
      ["#16131a", "#a4a0a0"],
    ]);
  });
});
