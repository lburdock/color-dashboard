import PropTypes from "prop-types";
import React from "react";
import {
  code,
  GridHeaderItem,
  GridItem,
  NotApplicable,
  ThreeColumnGrid,
} from "./styles";

const columns = [
  { text: "Type", align: "left" },
  { text: "Level AA", align: "center" },
  { text: "Level AAA", align: "center" },
];

const rowData = [
  {
    id: "normal",
    type: "Normal text",
    aa: <code>4.5:1</code>,
    aaa: <code>7:1</code>,
  },
  {
    id: "large",
    type: "Large text",
    aa: <code>3:1</code>,
    aaa: <code>4.5:1</code>,
  },
  {
    id: "ui",
    type: "UI Component",
    aa: <code>3:1</code>,
    aaa: <NotApplicable>N/A</NotApplicable>,
  },
  {
    id: "icon",
    type: "Graphical Object",
    aa: <code>3:1</code>,
    aaa: <NotApplicable>N/A</NotApplicable>,
  },
];

/**
 * Returns a table with info about contrast guidelines
 */
const InfoGrid = props => {
  return (
    <ThreeColumnGrid {...props}>
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
        </React.Fragment>
      ))}
    </ThreeColumnGrid>
  );
};

export default InfoGrid;

InfoGrid.propTypes = {
  className: PropTypes.string,
};
