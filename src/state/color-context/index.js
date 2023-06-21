import PropTypes from "prop-types";
import React from "react";
import { getColorsFromSearchParams } from "../../utils/routing";
import { reducer, INITIAL_STATE } from "./reducer";
import { initializeColors } from "./actions";

export const FALLBACK_COLOR = "#0b7ba7";

const ColorStateContext = React.createContext();
const ColorDispatchContext = React.createContext();

export function ColorProvider({ children, initialState = INITIAL_STATE }) {
  const [colors, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const initColors = getColorsFromSearchParams(window.location.search);
    if (initColors.length) {
      dispatch(initializeColors(initColors));
    }
  }, []);

  return (
    <ColorDispatchContext.Provider value={dispatch}>
      <ColorStateContext.Provider value={colors}>
        {children}
      </ColorStateContext.Provider>
    </ColorDispatchContext.Provider>
  );
}

ColorProvider.propTypes = {
  initialState: PropTypes.object,
  children: PropTypes.node.isRequired,
};

/**
 * Hook to access the recent colors array
 */
export function useColorState() {
  const context = React.useContext(ColorStateContext);
  if (context === undefined) {
    throw new Error("useColorState must be used within a ColorProvider");
  }
  return context;
}

/**
 * Hook to access the function to update the recent colors array
 */
export function useColorDispatch() {
  const context = React.useContext(ColorDispatchContext);
  if (context === undefined) {
    throw new Error("useColorDispatch must be used within a ColorProvider");
  }
  return context;
}
