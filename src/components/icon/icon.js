import PropTypes from "prop-types";
import React from "react";
import cn from "../../utils/cn";

const Icon = ({ className, icon, size, ...props }) => {
  return <i className={cn(icon, size, className)} {...props} />;
};

export default Icon;

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
};
