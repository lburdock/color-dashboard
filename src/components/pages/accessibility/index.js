import { useNavigate } from "@reach/router";
import { meetsContrastGuidelines } from "polished";
import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import useSearchParameters from "../../../state/search-parameters-hook";
import { useRecentColorsDispatch } from "../../../state/recent-colors-context";
import { updateItemByIndex } from "../../../utils/array";
import { formatColorSearchParams } from "../../../utils/routing";
import { InvisibleButton } from "../../buttons/invisible";
import { Icon, IconWrapper } from "../../icon";
import InfoModal from "./info-modal";
import InfoSwatch from "../../swatches/info";
import InfoSwatchWithPicker from "../../swatches/info-with-color-picker";
import AccessibilitySection from "./accessibility-section";
import getAccessibilityLevels from "./get-accessibility-levels";

const initColors = ["#fff", "#000"];

/**
 * This component allows the user to enter a foreground and background color to determine
 * if the colors are accessible.
 *
 * If they aren't, this page provides a list of options that are accessible
 * by lightening or darkening the provided colors.
 */
const AccessibilityChecker = () => {
  const navigate = useNavigate();
  const addRecentColor = useRecentColorsDispatch();
  const searchParamColors = useSearchParameters();
  const [colors, setColors] = useState(initColors);
  const contrastScores = meetsContrastGuidelines(colors[0], colors[1]);
  const accessibilityLevels = getAccessibilityLevels(colors, contrastScores);

  // Update the color with the search parameters after load
  useEffect(() => {
    if (searchParamColors.length >= 2) {
      setColors(searchParamColors.slice(0, 2));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleColorUpdate = updatedColors => {
    navigate(formatColorSearchParams(updatedColors), { replace: true });
    setColors(updatedColors);
  };

  const updateColor = index => newColor => {
    const updatedColors = updateItemByIndex(colors, index, newColor);
    handleColorUpdate(updatedColors);
    addRecentColor(newColor);
  };

  const swapColors = () => {
    handleColorUpdate([colors[1], colors[0]]);
  };

  return (
    <>
      <GlobalStyle />
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <div className="is-flex is-align-items-baseline">
              <h1 className="title mr-3">Color accessibility checker</h1>
              <InfoModal />
            </div>

            <AccessibilitySection
              key={`${colors[0]}-${colors[1]}`}
              colors={colors}
            >
              <InfoSwatchWithPicker
                className="mr-3 mb-5"
                key={colors[0]}
                initColor={colors[0]}
                name="Background"
                onUpdate={updateColor(0)}
              />
              <StyledIconWrapper
                as={InvisibleButton}
                aria-label="Swap colors"
                size="small"
                onClick={swapColors}
              >
                <Icon aria-hidden="true" icon="fas fa-sync" />
              </StyledIconWrapper>
              <InfoSwatchWithPicker
                className="ml-3 mb-5"
                key={colors[1]}
                initColor={colors[1]}
                name="Foreground"
                onUpdate={updateColor(1)}
              />
            </AccessibilitySection>
          </div>
        </div>
      </section>

      {accessibilityLevels.map(level => (
        <section className="hero is-white" key={level.id}>
          <div className="hero-body">
            <div className="container">
              <h2 className="title is-3">{level.label}</h2>
              <div className="subtitle">{level.description}</div>
              <div>
                {level.options.map((options, index) => (
                  <AccessibilitySection
                    colors={options}
                    hasTopMargin={index !== 0}
                    key={index}
                  >
                    <InfoSwatch
                      name="Background"
                      className="mr-3 mb-5"
                      colorString={options[0]}
                    />
                    <InfoSwatch
                      name="Foreground"
                      className="mr-3 mb-5"
                      colorString={options[1]}
                    />
                  </AccessibilitySection>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default AccessibilityChecker;

const GlobalStyle = createGlobalStyle`
  html {
    background: ${({ theme }) => theme.colors.lightBackground};
  }
`;

const StyledIconWrapper = styled(IconWrapper)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
