import React, { useState } from "react";
import { useNavigate } from "@reach/router";
import styled from "styled-components";
import {
  useRecentColorsDispatch,
  useRecentColorsState,
} from "../../../state/recent-colors-context";
import { deleteItemByIndex, updateItemByIndex } from "../../../utils/array";
import { formatColorSearchParams } from "../../../utils/routing";
import AddButton from "./add-button";
import Swatch from "./swatch";

const ColorPalette = () => {
  const navigate = useNavigate();
  const addRecentColor = useRecentColorsDispatch();
  const [colors, setColors] = useState(useRecentColorsState());

  const handleColorUpdate = updatedColors => {
    navigate(formatColorSearchParams(updatedColors), { replace: true });
    setColors(updatedColors);
  };

  const addNewColor = hex => {
    const updatedColors = [...colors, hex];
    handleColorUpdate(updatedColors);
    addRecentColor(hex);
  };

  const deleteColor = index => () => {
    const updatedColors = deleteItemByIndex(colors, index);
    handleColorUpdate(updatedColors);
  };

  const updateColor = index => newColor => {
    const updatedColors = updateItemByIndex(colors, index, newColor);
    handleColorUpdate(updatedColors);
    addRecentColor(newColor);
  };

  return (
    <StyledWrapper>
      {colors.length
        ? colors.map((color, index) => (
            <Swatch
              key={`${color}-${index}`}
              initColor={color}
              onUpdate={updateColor(index)}
              onDelete={deleteColor(index)}
            />
          ))
        : null}
      <AddButton
        initColor={colors[colors.length - 1]}
        onAddColor={addNewColor}
      />
    </StyledWrapper>
  );
};

export default ColorPalette;

const StyledWrapper = styled.div`
  align-items: center;
  box-sizing: border-box; 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding 2rem 0;
`;
