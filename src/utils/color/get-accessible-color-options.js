import { getLuminance } from "polished";
import findColorWithLuminance from "./luminance/find-color-with-luminance";
import getMaxLowerLuminance from "./luminance/get-max-lower-luminance";
import getMinGreaterLuminance from "./luminance/get-min-greater-luminance";

/**
 * Background:
 *   - Colors are accessible only if there is enough contrast between them.
 *   - The luminance of each color is used to calculate the contrast.
 *   - If the luminance between the two colors is too close, we can either try:
 *       1. lightening the lighter color
 *       2. darkening the darker color
 *
 * @param {array} colors The background and foreground colors to test for accessibility
 * @param {number} contrast The desired contrast ratio between the colors
 */
const getAccessibleColorOptions = ({ colors, contrast }) => {
  let options = [];
  const [color0, color1] = colors;
  const [luminance0, luminance1] = colors.map(color => getLuminance(color));
  const firstColorIsLighter = luminance0 > luminance1;

  /**
   * Check if we can raise the luminance of the lighter color to meet the contrast requirement.
   * If so, lighten the color to that luminance and save it to the options array.
   */
  const minGreaterLuminance = getMinGreaterLuminance(
    contrast,
    firstColorIsLighter ? luminance1 : luminance0
  );

  if (minGreaterLuminance) {
    const color = findColorWithLuminance(
      firstColorIsLighter ? color0 : color1,
      minGreaterLuminance
    );
    if (color) {
      options.push(firstColorIsLighter ? [color, color1] : [color0, color]);
    }
  }

  /**
   * Check if we can lower the luminance of the darker color to meet the contrast requirement.
   * If so, darken the color to that luminance and save it to the options array.
   */
  const maxLowerLuminance = getMaxLowerLuminance(
    contrast,
    firstColorIsLighter ? luminance0 : luminance1
  );
  if (maxLowerLuminance) {
    const color = findColorWithLuminance(
      firstColorIsLighter ? color1 : color0,
      maxLowerLuminance
    );
    if (color) {
      options.push(firstColorIsLighter ? [color0, color] : [color, color1]);
    }
  }

  return options;
};

export default getAccessibleColorOptions;
