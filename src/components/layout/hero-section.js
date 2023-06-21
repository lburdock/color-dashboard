import PropTypes from "prop-types";
import React from "react";
import cn from "../../utils/cn";

export const HeroSection = ({ children, className }) => (
  <section className={cn("hero", className)}>
    <div className="hero-body">
      <div className="container">{children}</div>
    </div>
  </section>
);

HeroSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
