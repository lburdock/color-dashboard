import React from "react";
import PropTypes from "prop-types";
import { RecentColorsProvider } from "../../state/recent-colors-context";
import useSearchParameters from "../../state/search-parameters-hook";
import ThemeProvider from "../../state/theme";
import Navbar from "./navbar";

import "bulma/css/bulma.css";

const App = ({ children }) => {
  const colors = useSearchParameters();

  return (
    <ThemeProvider>
      <RecentColorsProvider initColors={colors}>
        <Navbar />
        <main>{children}</main>
      </RecentColorsProvider>
    </ThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
