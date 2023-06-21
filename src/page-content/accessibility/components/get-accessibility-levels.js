import React from "react";
import getAccessibleColorOptions from "../../../utils/color/get-accessible-color-options";

/**
 * Returns a list of accessible color options (if any exist) that meet each contrast level.
 * These new color options are created by lightening or darkening the provided colors.
 *
 * @param {string} colors The background and foreground colors
 * @param {object} contrastScores An object that shows which contrast guidelines have been met
 */
const getAccessibilityLevels = (colors, { AA, AALarge, AAA }) => {
  return [
    {
      id: "3",
      label: "Level AA: Most components",
      description: (
        <>
          These color combinations meet the minimum contrast guidelines for most
          components, <b>except text at smaller sizes</b>.
        </>
      ),
      options: !AALarge
        ? getAccessibleColorOptions({ contrast: 3, colors })
        : [],
    },
    {
      id: "4.5",
      label: "Level AA: All components",
      description: (
        <>
          These color combinations meet the minimum contrast guidelines for{" "}
          <b>all components</b>.
        </>
      ),
      options: !AA ? getAccessibleColorOptions({ contrast: 4.5, colors }) : [],
    },
    {
      id: "7",
      label: "Level AAA (optional)",
      description: (
        <>
          These color combinations meet the <b>optional</b> enhanced contrast
          guidelines for all components.
        </>
      ),
      options: !AAA ? getAccessibleColorOptions({ contrast: 7, colors }) : [],
    },
  ].filter(item => item.options.length);
};

export default getAccessibilityLevels;
