/**
 * Finds the greater luminance needed to reach the desired contrast ratio
 * Formula: (greaterLuminance + 0.05) / (lowerLuminance + 0.05) > contrast ratio
 * @param {number} contrast The desired contrast ratio
 * @param {number} lowerLuminance The luminance of the darker color (float between 0 and 1)
 *
 * @returns {number|undefined} The luminance of the lighter color (float between 0 and 1) or
 *    undefined if the greater luminance is impossible
 */
const getMinGreaterLuminance = (contrast, lowerLuminance) => {
  const greaterLuminance = contrast * lowerLuminance + contrast * 0.05 - 0.05;
  return greaterLuminance > 1 ? undefined : greaterLuminance;
};

export default getMinGreaterLuminance;
