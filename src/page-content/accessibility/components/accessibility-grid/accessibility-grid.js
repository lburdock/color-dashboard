import PropTypes from "prop-types";
import React from "react";
import { Icon, IconWrapper } from "../../../../components/icon";
import ContrastStatus from "./contrast-status";
import {
  Example,
  Grid,
  GridHeaderItem,
  GridHeaderSub,
  NotApplicable,
  StyledInput,
  CustomColor,
  CustomFontSize,
} from "./styles";

const Spacer = () => <span className="mx-1">•</span>;

const columns = [
  { text: "Type" },
  { text: "AA", alignClass: "has-text-centered" },
  { text: "AAA", subtitle: "(optional)", alignClass: "has-text-centered" },
  { text: "Example" },
];

/**
 * Returns a list of table row data
 * @param {string} foregroundColor The foreground color
 * @param {object} contrastScores An object that shows which contrast guidelines have been met
 */
const getRowData = (foregroundColor, { AA, AAA, AALarge, AAALarge }) => {
  const AALargeContrastStatus = <ContrastStatus pass={AALarge} />;
  return [
    {
      id: "normal",
      type: "Normal text",
      example: (
        <CustomColor color={foregroundColor}>
          <CustomFontSize fontSize="17pt">17pt text</CustomFontSize>
          <Spacer />
          <CustomFontSize className="has-text-weight-bold" fontSize="13pt">
            13pt bold text
          </CustomFontSize>
        </CustomColor>
      ),
      aa: <ContrastStatus pass={AA} />,
      aaa: <ContrastStatus pass={AAA} useWarning />,
    },
    {
      id: "large",
      type: "Large text",
      example: (
        <CustomColor color={foregroundColor}>
          <CustomFontSize fontSize="18pt">18pt text</CustomFontSize>
          <Spacer />
          <CustomFontSize className="has-text-weight-bold" fontSize="14pt">
            14pt bold text
          </CustomFontSize>
        </CustomColor>
      ),
      aa: AALargeContrastStatus,
      aaa: <ContrastStatus pass={AAALarge} useWarning />,
    },
    {
      id: "ui",
      type: "UI Component",
      example: <StyledInput color={foregroundColor} />,
      aa: AALargeContrastStatus,
      aaa: <NotApplicable>N/A</NotApplicable>,
    },
    {
      id: "icon",
      type: "Graphical Object",
      example: (
        <CustomColor as={IconWrapper} color={foregroundColor} size="small">
          <Icon aria-hidden="true" icon="fas fa-heart" />
        </CustomColor>
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
        <GridHeaderItem key={column.text} className={column.alignClass}>
          <div className="has-text-weight-bold is-uppercase">{column.text}</div>
          {column.subtitle && (
            <GridHeaderSub className="is-italic is-size-7">
              {column.subtitle}
            </GridHeaderSub>
          )}
        </GridHeaderItem>
      ))}
      {rowData.map(row => (
        <React.Fragment key={row.id}>
          <div>{row.type}</div>
          <div className="has-text-centered">{row.aa}</div>
          <div className="has-text-centered">{row.aaa}</div>
          <div>
            <Example background={backgroundColorString}>{row.example}</Example>
          </div>
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
