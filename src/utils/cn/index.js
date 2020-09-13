/**
 * Combines a series of strings into a single string, removing falsy values
 * @param  {...string} classNames A list of class name strings
 */
const cn = (...classNames) =>
  classNames.filter((className) => !!className).join(" ");

export default cn;
