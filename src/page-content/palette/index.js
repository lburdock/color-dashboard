import React from "react";
import styled from "styled-components";
import { HeroSection } from "../../components/layout/hero-section";
import { InfoSwatchList } from "../../components/swatches/info-swatch-list";
import InfoSwatchWithPicker from "../../components/swatches/info-with-color-picker";
import { useColorDispatch, useColorState } from "../../state/color-context";
import {
  addPaletteColor,
  updatePaletteColor,
  deletePaletteColor,
} from "../../state/color-context/actions";
import AddButton from "./components/add-button";
import ShareButton from "./components/share-button";

const ColorPalette = () => {
  const dispatch = useColorDispatch();
  const { palette: colors } = useColorState();
  const hasColors = !!colors.length;

  return (
    <HeroSection>
      <div className="is-flex is-justify-content-center mb-5">
        <AddButton
          initColor={colors?.[colors.length - 1]}
          onAddColor={newColor => dispatch(addPaletteColor({ newColor }))}
        />
      </div>
      {hasColors ? (
        <StyledButton>Share</StyledButton>
      ) : (
        <h1 className="title is-size-4-desktop is-size-5-touch has-text-centered has-text-grey">
          Create and share your color palette.
        </h1>
      )}
      <InfoSwatchList>
        {hasColors &&
          colors.map((color, index) => (
            <InfoSwatchWithPicker
              key={`${color}-${index}`}
              color={color}
              onUpdate={newColor =>
                dispatch(updatePaletteColor({ newColor, index }))
              }
              onDelete={() => dispatch(deletePaletteColor({ index }))}
            />
          ))}
      </InfoSwatchList>
    </HeroSection>
  );
};

export default ColorPalette;

const StyledButton = styled(ShareButton)`
  bottom: 0.5rem;
  position: fixed;
  right: 0.5rem;
  z-index: 1;
`;
