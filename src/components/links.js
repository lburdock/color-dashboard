import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import cn from "../utils/cn";

/**
 * Renders an external link that opens in a new tab
 */
export const ExternalLink = ({ children, ...props }) => (
  <a rel="noopener noreferrer nofollow" target="_blank" {...props}>
    {children}
  </a>
);

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

const disableCurrentTab = ({ href, location }) => {
  const hasMatch = href === location.pathname + location.search;
  return hasMatch ? { "aria-disabled": "true" } : {};
};

/**
 * Renders a nav link. The link to the current page is disabled.
 */
export const NavLink = ({ className, ...props }) => (
  <Link
    className={cn("navbar-item", className)}
    getProps={disableCurrentTab}
    {...props}
  />
);

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
};
