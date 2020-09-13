import { useLocation } from "@reach/router";
import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { RecentColorsProvider } from "../../state/recent-colors-context";
import { getColorsFromSearchParams } from "../../utils/routing";

import "bulma/css/bulma.css";

const theme = {
  colors: { success: "#178273", minGray: "#949494", link: "#3273dc" },
};

const App = ({ children }) => {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <RecentColorsProvider
        initColors={getColorsFromSearchParams(location.search)}
      >
        {children}
      </RecentColorsProvider>
    </ThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
