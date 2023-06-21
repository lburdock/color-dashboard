import * as ActionType from "./action-types";

export const initializeColors = colors => ({
  type: ActionType.INITIALIZE_COLORS,
  payload: { colors },
});

export const addPaletteColor = payload => ({
  type: ActionType.ADD_PALETTE_COLOR,
  payload,
});

export const updatePaletteColor = payload => ({
  type: ActionType.UPDATE_PALETTE_COLOR,
  payload,
});

export const deletePaletteColor = payload => ({
  type: ActionType.DELETE_PALETTE_COLOR,
  payload,
});

export const updateShadeColor = payload => ({
  type: ActionType.UPDATE_SHADE_COLOR,
  payload,
});

export const updateAccessibilityColor = payload => ({
  type: ActionType.UPDATE_ACCESSIBILITY_COLOR,
  payload,
});

export const swapAccessibilityColor = payload => ({
  type: ActionType.SWAP_ACCESSIBILITY_COLORS,
  payload,
});
