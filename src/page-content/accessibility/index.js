import { meetsContrastGuidelines } from "polished";
import React from "react";
import { InvisibleButton } from "../../components/buttons";
import { Icon, IconWrapper } from "../../components/icon";
import { HeroSection } from "../../components/layout/hero-section";
import InfoSwatch from "../../components/swatches/info";
import InfoSwatchWithPicker from "../../components/swatches/info-with-color-picker";
import {
  useColorDispatch,
  useColorState,
  FALLBACK_COLOR,
} from "../../state/color-context";
import {
  updateAccessibilityColor,
  swapAccessibilityColor,
} from "../../state/color-context/actions";
import AccessibilitySection from "./components/accessibility-section";
import getAccessibilityLevels from "./components/get-accessibility-levels";
import InfoModal from "./components/info-modal";

const initColors = [FALLBACK_COLOR, "#000"];

/**
 * This component allows the user to enter a foreground and background color to determine
 * if the colors are accessible.
 *
 * If they aren't, this page provides a list of options that are accessible
 * by lightening or darkening the provided colors.
 */
const AccessibilityChecker = () => {
  const { palette, accessibility } = useColorState();
  const colors = [...accessibility, ...palette, ...initColors].slice(0, 2);
  const dispatch = useColorDispatch();
  const contrastScores = meetsContrastGuidelines(colors[0], colors[1]);
  const accessibilityLevels = getAccessibilityLevels(colors, contrastScores);

  const updateColor = index => newColor => {
    dispatch(
      updateAccessibilityColor({
        newColor,
        currentColors: colors,
        index,
      })
    );
  };

  const swapColors = () => {
    dispatch(swapAccessibilityColor({ currentColors: colors }));
  };

  return (
    <>
      <HeroSection>
        <div className="is-flex is-align-items-baseline">
          <h1 className="title is-4 mr-3">Color accessibility checker</h1>
          <InfoModal />
        </div>

        <AccessibilitySection key={`${colors[0]}-${colors[1]}`} colors={colors}>
          <InfoSwatchWithPicker
            className="mr-3 mb-5"
            key={colors[0]}
            color={colors[0]}
            name="Background"
            onUpdate={updateColor(0)}
          />
          <IconWrapper
            className="is-hidden-mobile"
            as={InvisibleButton}
            aria-label="Swap colors"
            size="small"
            onClick={swapColors}
          >
            <Icon aria-hidden="true" icon="fas fa-sync" />
          </IconWrapper>
          <InfoSwatchWithPicker
            className="ml-3 mb-5"
            key={colors[1]}
            color={colors[1]}
            name="Foreground"
            onUpdate={updateColor(1)}
          />
        </AccessibilitySection>
      </HeroSection>

      {accessibilityLevels.map(level => (
        <HeroSection
          key={level.id}
          className={
            level.id === "4.5"
              ? "has-background-primary-light"
              : "has-background-white"
          }
        >
          <h2 className="title is-4">{level.label}</h2>
          <div className="subtitle">{level.description}</div>
          <div>
            {level.options.map((option, index) => (
              <AccessibilitySection
                label={`Option ${index + 1}: ${option.text}`}
                colors={option.colors}
                hasTopMargin={index !== 0}
                key={index}
              >
                <InfoSwatch
                  name="Background"
                  className="mr-3 mb-5"
                  colorString={option.colors[0]}
                />
                <InfoSwatch
                  name="Foreground"
                  className="mr-3 mb-5"
                  colorString={option.colors[1]}
                />
              </AccessibilitySection>
            ))}
          </div>
        </HeroSection>
      ))}
    </>
  );
};

export default AccessibilityChecker;
