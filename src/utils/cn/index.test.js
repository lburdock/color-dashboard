import cn from ".";

describe("cn", () => {
  it("joins the classnames together correctly", () => {
    expect(cn("a", "", "b", undefined, "c", null, "d")).toEqual("a b c d");
  });

  it("handles no arguments", () => {
    expect(cn()).toEqual("");
  });
});
