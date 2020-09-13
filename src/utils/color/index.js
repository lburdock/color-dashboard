import { parseToHsl } from "polished";

const getPercent = (decimal) => Math.round(decimal * 100);

/**
 * Converts a color string to an HSL object (reformatted for display)
 * @param {string} colorString A string representing a color, ie '#ffcd64' or 'rgba(179,25,25,0.72)'
 */
export const parseToHslFormatted = (colorString) => {
  const { hue, saturation, lightness } = parseToHsl(colorString);
  return {
    hue: Math.round(hue),
    saturation: getPercent(saturation),
    lightness: getPercent(lightness),
  };
};
