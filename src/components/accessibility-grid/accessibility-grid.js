import PropTypes from "prop-types";
import React from "react";
import { Icon } from "../icon";
import ContrastStatus from "./contrast-status";
import {
  Example,
  Grid,
  GridHeaderItem,
  GridItem,
  LargeTextBig,
  LargeTextBold,
  NormalTextBig,
  NormalTextBold,
  NotApplicable,
  Spacer,
  StyledIconWrapper,
  StyledInput,
  TextColorProvider,
} from "./styles";

const columns = [
  { text: "Type", align: "left" },
  { text: "AA", align: "center" },
  { text: "AAA", align: "center" },
  { text: "Example", align: "left" },
];

/**
 * Returns a list of table row data
 * @param {string} color The foreground color
 * @param {object} contrastScores An object that shows which contrast guidelines have been met
 */
const getRowData = (color, { AA, AAA, AALarge, AAALarge }) => {
  const AALargeContrastStatus = <ContrastStatus pass={AALarge} />;
  return [
    {
      id: "normal",
      type: "Normal text",
      example: (
        <TextColorProvider color={color}>
          <NormalTextBig>17pt text</NormalTextBig>
          <Spacer />
          <NormalTextBold>13pt bold text</NormalTextBold>
        </TextColorProvider>
      ),
      aa: <ContrastStatus pass={AA} />,
      aaa: <ContrastStatus pass={AAA} />,
    },
    {
      id: "large",
      type: "Large text",
      example: (
        <TextColorProvider color={color}>
          <LargeTextBig>18pt text</LargeTextBig>
          <Spacer />
          <LargeTextBold>14pt bold text</LargeTextBold>
        </TextColorProvider>
      ),
      aa: AALargeContrastStatus,
      aaa: <ContrastStatus pass={AAALarge} />,
    },
    {
      id: "ui",
      type: "UI Component",
      example: <StyledInput borderColor={color} />,
      aa: AALargeContrastStatus,
      aaa: <NotApplicable>N/A</NotApplicable>,
    },
    {
      id: "icon",
      type: "Graphical Object",
      example: (
        <StyledIconWrapper color={color} size="small">
          <Icon aria-hidden="true" icon="fas fa-heart" />
        </StyledIconWrapper>
      ),
      aa: AALargeContrastStatus,
      aaa: <NotApplicable>N/A</NotApplicable>,
    },
  ];
};

/**
 * Returns a table that shows which contrast guidelines have been met
 */
const AccessibilityGrid = ({
  backgroundColorString,
  contrastScores,
  foregroundColorString,
  ...props
}) => {
  const rowData = getRowData(foregroundColorString, contrastScores);
  return (
    <Grid {...props}>
      {columns.map(column => (
        <GridHeaderItem key={column.text} textAlign={column.align}>
          {column.text}
        </GridHeaderItem>
      ))}
      {rowData.map(row => (
        <React.Fragment key={row.id}>
          <GridItem>{row.type}</GridItem>
          <GridItem textAlign="center">{row.aa}</GridItem>
          <GridItem textAlign="center">{row.aaa}</GridItem>
          <GridItem>
            <Example background={backgroundColorString}>{row.example}</Example>
          </GridItem>
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default AccessibilityGrid;

AccessibilityGrid.propTypes = {
  backgroundColorString: PropTypes.string.isRequired,
  className: PropTypes.string,
  contrastScores: PropTypes.shape({
    AA: PropTypes.bool,
    AAA: PropTypes.bool,
    AALarge: PropTypes.bool,
    AAALarge: PropTypes.bool,
  }),
  foregroundColorString: PropTypes.string.isRequired,
};
