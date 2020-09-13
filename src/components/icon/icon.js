import PropTypes from "prop-types";
import React from "react";
import cn from "../../utils/cn";

const typeMap = {
  regular: "far",
  solid: "fas",
};

const Icon = ({ className, icon, size, type = "regular", ...props }) => {
  const styleClass = typeMap[type];

  if (!styleClass) {
    throw new Error(`Incorrect props passed into the Icon component`);
  }

  return <i className={cn(styleClass, icon, size, className)} {...props} />;
};

export default Icon;

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  type: PropTypes.oneOf(["regular", "solid"]),
};
