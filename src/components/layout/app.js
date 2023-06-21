import React from "react";
import { createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";
import { ColorProvider } from "../../state/color-context";
import ThemeProvider from "../../state/theme";
import Navbar from "./navbar";

import "bulma/css/bulma.css";

const App = ({ children }) => {
  return (
    <ThemeProvider>
      <ColorProvider>
        <GlobalStyle />
        <Navbar />
        <main>{children}</main>
      </ColorProvider>
    </ThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};

const GlobalStyle = createGlobalStyle`
  html {
    background: ${({ theme }) => theme.colors.lightBackground};
  }
`;

export default App;
