import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  borderRadius: "0.25rem",
  breakpoints: {
    mobile: "600px",
  },
  colors: {
    danger: "#e8113c",
    lightBackground: "#f5f5f5",
    link: "#3273dc",
    minGraphicalGray: "#8c8c8c",
    minTextGray: "#707070",
    success: "#008571",
    successBackground: "#f5fffd",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
