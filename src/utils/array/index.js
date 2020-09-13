/**
 * Returns a shallow copy of the array with the item at the specified index removed
 * @param {Array} arr The array to change
 * @param {number} index The index of the item to remove
 */
export const deleteItemByIndex = (arr, index) => {
  if (!arr) return arr;

  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

/**
 * Returns a shallow copy of the array with the item at the specified index updated
 * @param {Array} arr The array to change
 * @param {number} index The index of the item to update
 * @param {*} item The item to add to the array
 */
export const updateItemByIndex = (arr, index, item) => {
  if (!arr) return arr;

  return [...arr.slice(0, index), item, ...arr.slice(index + 1)];
};
