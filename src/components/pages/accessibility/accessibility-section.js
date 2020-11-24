import PropTypes from "prop-types";
import { getContrast, meetsContrastGuidelines } from "polished";
import React from "react";
import styled from "styled-components";
import AccessibilityGrid from "../../accessibility-grid";

/**
 * Displays a horizontal section with colors on the left and the accessibility on the right
 */
const AccessibilitySection = ({ children, colors, hasTopMargin }) => {
  return (
    <Level hasTopMargin={hasTopMargin}>
      <div>
        <Label>Colors</Label>
        <div className="is-align-items-center is-flex is-flex-wrap-nowrap">
          {children}
        </div>
      </div>
      <div>
        <Label>Contrast</Label>
        <AutoWidthBox className="box">
          <div className="is-size-3 has-text-weight-semibold">
            {getContrast(...colors)}:1
          </div>
        </AutoWidthBox>

        <Label>Accessibility scores</Label>
        <AutoWidthBox className="box">
          <AccessibilityGrid
            backgroundColorString={colors[0]}
            foregroundColorString={colors[1]}
            contrastScores={meetsContrastGuidelines(...colors)}
          />
        </AutoWidthBox>
      </div>
    </Level>
  );
};

export default AccessibilitySection;

AccessibilitySection.propTypes = {
  children: PropTypes.node.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  hasTopMargin: PropTypes.bool,
};

const AutoWidthBox = styled.div`
  display: table;
`;

const Label = styled.div`
  border-top: 1px solid #b3b3b3;
  color: #4a4a4a;
  font-size: 0.8rem;
  padding: 0.25rem 0;
  text-transform: uppercase;
`;

const Level = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ hasTopMargin }) => (hasTopMargin ? "margin-top: 5rem;" : "")};

  & > *:not(:last-child) {
    margin-right: 1rem;
  }

  @media (max-width: 1215px) {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-right: 0;
    }
  }
`;
