import { parseToRgb } from "polished";
import { parseToHslFormatted } from "../../../utils/color";

export const getRgbText = (colorHex) => {
  const { red, green, blue } = parseToRgb(colorHex);
  return {
    display: `RGB ${red} ${green} ${blue}`,
    copy: `rgb(${red}, ${green}, ${blue})`,
  };
};

export const getHslText = (colorHex) => {
  const { hue, saturation, lightness } = parseToHslFormatted(colorHex);
  return {
    display: `HSL ${hue} ${saturation}% ${lightness}%`,
    copy: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
  };
};
