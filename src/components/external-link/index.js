import PropTypes from "prop-types";
import React from "react";

/**
 * Renders an external link that opens in a new tab
 */
const ExternalLink = ({ children, ...props }) => (
  <a rel="noopener noreferrer nofollow" target="_blank" {...props}>
    {children}
  </a>
);

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default ExternalLink;
