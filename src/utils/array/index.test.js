import { deleteItemByIndex, updateItemByIndex } from ".";

describe("Array utils", () => {
  describe("deleteItemByIndex", () => {
    it("deletes the correct item from the array", () => {
      const arr = ["a", "b", "c"];
      const index = 1;
      expect(deleteItemByIndex(arr, index)).toEqual(["a", "c"]);
    });

    it("handles an incorrect index", () => {
      const arr = ["a", "b", "c"];
      const index = 5;
      expect(deleteItemByIndex(arr, index)).toEqual(["a", "b", "c"]);
    });

    it("handles an empty array", () => {
      const arr = [];
      const index = 1;
      expect(deleteItemByIndex(arr, index)).toEqual([]);
    });

    it("handles an undefined value", () => {
      const arr = null;
      const index = 1;
      expect(deleteItemByIndex(arr, index)).toEqual(null);
    });
  });

  describe("updateItemByIndex", () => {
    it("updates the correct item from the array", () => {
      const arr = ["a", "b", "c"];
      const index = 1;
      const item = "new";
      expect(updateItemByIndex(arr, index, item)).toEqual(["a", "new", "c"]);
    });

    it("handles an incorrect index", () => {
      const arr = ["a", "b", "c"];
      const index = 5;
      const item = "new";
      expect(updateItemByIndex(arr, index, item)).toEqual([
        "a",
        "b",
        "c",
        "new",
      ]);
    });

    it("handles an empty array", () => {
      const arr = [];
      const index = 1;
      const item = "new";
      expect(updateItemByIndex(arr, index, item)).toEqual(["new"]);
    });

    it("handles an undefined value", () => {
      const arr = undefined;
      const index = 1;
      const item = "new";
      expect(updateItemByIndex(arr, index, item)).toEqual(undefined);
    });
  });
});
