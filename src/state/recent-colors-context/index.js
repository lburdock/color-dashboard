import PropTypes from "prop-types";
import React from "react";

const RecentColorsStateContext = React.createContext();
const RecentColorsDispatchContext = React.createContext();

export function RecentColorsProvider({ children, initColors = [] }) {
  const [state, setState] = React.useState(initColors);
  const addColor = color => {
    setState(Array.from(new Set([...state, color])));
  };
  return (
    <RecentColorsStateContext.Provider value={state}>
      <RecentColorsDispatchContext.Provider value={addColor}>
        {children}
      </RecentColorsDispatchContext.Provider>
    </RecentColorsStateContext.Provider>
  );
}

RecentColorsProvider.propTypes = {
  initColors: PropTypes.array,
  children: PropTypes.node.isRequired,
};

/**
 * Hook to access the recent colors array
 */
export function useRecentColorsState() {
  const context = React.useContext(RecentColorsStateContext);
  if (context === undefined) {
    throw new Error(
      "useRecentColorsState must be used within a RecentColorsProvider"
    );
  }
  return context;
}

/**
 * Hook to access the function to update the recent colors array
 */
export function useRecentColorsDispatch() {
  const context = React.useContext(RecentColorsDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useRecentColorsDispatch must be used within a RecentColorsProvider"
    );
  }
  return context;
}
