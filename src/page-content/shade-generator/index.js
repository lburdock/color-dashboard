import React, { useState } from "react";
import { setLightness } from "polished";
import { HeroSection } from "../../components/layout/hero-section";
import InfoSwatch from "../../components/swatches/info";
import { InfoSwatchList } from "../../components/swatches/info-swatch-list";
import InfoSwatchWithPicker from "../../components/swatches/info-with-color-picker";
import {
  useColorDispatch,
  useColorState,
  FALLBACK_COLOR,
} from "../../state/color-context";
import { updateShadeColor } from "../../state/color-context/actions";
import RandomButton from "./components/random-button";
import Select from "./components/select";

const lightnessStep = {
  1: Array.from({ length: 99 }, (_, i) => (i + 1) * 0.01),
  2: Array.from({ length: 49 }, (_, i) => (i + 1) * 0.02),
  5: Array.from({ length: 19 }, (_, i) => (i + 1) * 0.05),
};

const ShadeGenerator = () => {
  const { palette, shade } = useColorState();
  const color = shade[0] || palette[0] || FALLBACK_COLOR;
  const dispatch = useColorDispatch();
  const [step, setStep] = useState("5");

  const updateColor = (newColor, skipPaletteUpdate) => {
    dispatch(updateShadeColor({ newColor, skipPaletteUpdate }));
  };

  return (
    <>
      <HeroSection>
        <h1 className="title is-4 mr-3">Shade generator</h1>
        <div className="is-flex">
          <InfoSwatchWithPicker
            className="mr-3 mb-3"
            key={color}
            color={color}
            onUpdate={updateColor}
          />
          <div>
            <Select onChange={setStep} value={step} />
            <RandomButton onClick={updateColor} />
          </div>
        </div>
      </HeroSection>
      <HeroSection className="has-background-white">
        <InfoSwatchList>
          {lightnessStep[step].map(lightness => (
            <InfoSwatch
              key={lightness}
              colorString={setLightness(lightness, color)}
            />
          ))}
        </InfoSwatchList>
      </HeroSection>
    </>
  );
};

export default ShadeGenerator;
