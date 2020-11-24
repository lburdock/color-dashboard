import { getLuminance, parseToHsl, setLightness } from "polished";

/**
 * Adjusts a color's lightness in 1% increments to match a target luminance.
 *
 * @param {string} color The color to adjust
 * @param {number} targetLuminance The desired luminance (float between 0 and 1) of the adjusted color
 * @param {number} start The lightness percent to start testing at
 * @param {number} stop The lightness percent to stop testing at
 *
 * @returns {string} The adjusted color
 */
const changeColorLightness = ({ color, targetLuminance, start, stop }) => {
  const lowerStart = start < stop;
  let match;
  for (
    let percent = start;
    lowerStart ? percent <= stop : percent >= stop;
    lowerStart ? percent++ : percent--
  ) {
    const newColor = setLightness(percent / 100, color);
    const newColorLuminance = getLuminance(newColor);
    const meetsTargetLuminance = lowerStart
      ? newColorLuminance >= targetLuminance
      : newColorLuminance <= targetLuminance;

    if (meetsTargetLuminance) break;

    match = newColor;
  }

  return match;
};

/**
 * Background:
 *   - The lightness of a color can be between 0 and 100%.
 *   - A color with 0% lightness is black and a color with 100% is white.
 *   - Adjusting the lightness of a color changes the color's luminance
 *
 * This function takes a color and increases or decreases the lightness to meet the target luminance
 * @param {string} color The color to adjust
 * @param {number} targetLuminance The desired luminance (float between 0 and 1) of the adjusted color
 *
 * @returns {string} The adjusted color
 */
const findColorWithLuminance = (color, targetLuminance) => {
  // Handle edge cases
  if (targetLuminance === 0) return "#000";
  if (targetLuminance === 1) return "#fff";

  const hslColor = parseToHsl(color);
  const lightnessPercent = Math.round(hslColor.lightness * 100);

  return getLuminance(color) > targetLuminance
    ? // Decrease the lightness
      changeColorLightness({
        color,
        targetLuminance,
        start: 0,
        stop: lightnessPercent,
      })
    : // Increase the lightness
      changeColorLightness({
        color,
        targetLuminance,
        stop: lightnessPercent,
        start: 100,
      });
};

export default findColorWithLuminance;
