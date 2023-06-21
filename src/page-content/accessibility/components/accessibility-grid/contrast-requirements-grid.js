import PropTypes from "prop-types";
import React from "react";
import { GridHeaderItem, NotApplicable, ThreeColumnGrid } from "./styles";

const columns = [
  { text: "Type" },
  { text: "Level AA", alignClass: "has-text-centered" },
  { text: "Level AAA", alignClass: "has-text-centered" },
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
        <GridHeaderItem key={column.text} className={column.alignClass}>
          {column.text}
        </GridHeaderItem>
      ))}
      {rowData.map(row => (
        <React.Fragment key={row.id}>
          <div>{row.type}</div>
          <div className="has-text-centered">{row.aa}</div>
          <div className="has-text-centered">{row.aaa}</div>
        </React.Fragment>
      ))}
    </ThreeColumnGrid>
  );
};

export default InfoGrid;

InfoGrid.propTypes = {
  className: PropTypes.string,
};
