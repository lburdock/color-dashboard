import queryString from "query-string";
export const COLOR_PARAM_KEY = "hex";

/**
 * Uses the search params object to generate an array of hex color strings
 * @param {string} searchParams URL search params string
 */
export const getColorsFromSearchParams = searchParams => {
  try {
    const params = queryString.parse(searchParams)[COLOR_PARAM_KEY];
    if (!params) return [];

    const colors = typeof params === "string" ? [params] : params;
    return colors.map(color => `#${color}`);
  } catch (err) {
    return [];
  }
};

/**
 * Reformats an array of hex strings into an array of search param name/value pairs
 * Read more: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
 * @param {Array} colors Array of string color values
 */
export const formatColorSearchParams = colors => {
  if (!colors || !colors.length) return "?";
  return (
    "?" +
    queryString.stringify({
      [COLOR_PARAM_KEY]: colors.map(color => color.replace("#", "")),
    })
  );
};
