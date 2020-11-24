import PropTypes from "prop-types";
import React from "react";
import cn from "../../utils/cn";

const sizeMap = {
  small: {
    wrapper: "is-small",
    icon: "",
  },
  default: {
    wrapper: "",
    icon: "fa-lg",
  },
  medium: {
    wrapper: "is-medium",
    icon: "fa-2x",
  },
  large: {
    wrapper: "is-large",
    icon: "fa-3x",
  },
};

const IconWrapper = ({
  as: Component = "span",
  children,
  className,
  size = "default",
  ...props
}) => {
  const sizeClass = sizeMap[size];

  if (!sizeClass) {
    throw new Error(`Incorrect props passed into the IconWrapper component`);
  }

  return (
    <Component className={cn("icon", sizeClass.wrapper, className)} {...props}>
      {React.cloneElement(children, { size: sizeClass.icon })}
    </Component>
  );
};

export default IconWrapper;

IconWrapper.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  children: PropTypes.element,
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "default", "medium", "large"]),
};
