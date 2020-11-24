/**
 * Finds the lower luminance needed to reach the desired contrast ratio
 * Formula: (greaterLuminance + 0.05) / (lowerLuminance + 0.05) > contrast ratio
 * @param {number} contrast The desired contrast ratio
 * @param {number} greaterLuminance The luminance of the lighter color (float between 0 and 1)
 *
 * @returns {number|undefined} The luminance of the darker color (float between 0 and 1) or
 *    undefined if the lower luminance is impossible
 */
const getMaxLowerLuminance = (contrast, greaterLuminance) => {
  const lowerLuminance = (greaterLuminance + 0.05) / contrast - 0.05;
  return lowerLuminance < 0 ? undefined : lowerLuminance;
};

export default getMaxLowerLuminance;
