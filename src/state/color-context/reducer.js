import { updateColorSearchParams } from "../../utils/routing";
import { deleteItemByIndex, updateItemByIndex } from "../../utils/array";
import * as ActionType from "./action-types";

export const INITIAL_STATE = {
  recent: [],
  palette: [],
  shade: [],
  accessibility: [],
};

const getUnique = colors => Array.from(new Set(colors));

export function reducer(state, action) {
  switch (action.type) {
    case ActionType.INITIALIZE_COLORS: {
      const colors = action.payload.colors || [];
      return {
        ...state,
        recent: colors,
        palette: colors,
      };
    }

    case ActionType.ADD_PALETTE_COLOR: {
      const { newColor } = action.payload;
      const colors = [newColor, ...state.palette];
      updateColorSearchParams(colors);
      return {
        ...state,
        recent: getUnique([newColor, ...state.recent]),
        palette: colors,
      };
    }

    case ActionType.UPDATE_PALETTE_COLOR: {
      const { newColor, index } = action.payload;
      const colors = updateItemByIndex(state.palette, index, newColor);
      updateColorSearchParams(colors);
      return {
        ...state,
        recent: getUnique([newColor, ...state.recent]),
        palette: colors,
      };
    }

    case ActionType.DELETE_PALETTE_COLOR: {
      const { index } = action.payload;
      const colors = deleteItemByIndex(state.palette, index);
      updateColorSearchParams(colors);
      return {
        ...state,
        palette: colors,
      };
    }

    case ActionType.UPDATE_SHADE_COLOR: {
      const { newColor, skipPaletteUpdate } = action.payload;
      updateColorSearchParams([newColor]);
      const updatedPalette =
        skipPaletteUpdate || state.palette.length
          ? {}
          : { palette: [newColor] };
      return {
        ...state,
        ...updatedPalette,
        recent: getUnique([newColor, ...state.recent]),
        shade: [newColor],
      };
    }

    case ActionType.UPDATE_ACCESSIBILITY_COLOR: {
      const { newColor, currentColors, index } = action.payload;
      const colors = updateItemByIndex(currentColors, index, newColor);
      updateColorSearchParams(colors);
      return {
        ...state,
        ...(!state.palette.length && { palette: [newColor] }),
        recent: getUnique([newColor, ...state.recent]),
        accessibility: colors,
      };
    }

    case ActionType.SWAP_ACCESSIBILITY_COLORS: {
      const { currentColors } = action.payload;
      const colors = [currentColors[1], currentColors[0]];
      updateColorSearchParams(colors);
      return {
        ...state,
        accessibility: colors,
      };
    }

    default:
      return state;
  }
}
