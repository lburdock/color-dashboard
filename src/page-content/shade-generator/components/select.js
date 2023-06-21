import React from "react";
import PropTypes from "prop-types";

const Select = ({ onChange, ...props }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <div className="field is-gr">
      <label className="has-text-weight-semibold" htmlFor="shadingStep">
        Shading step
      </label>
      <div className="control">
        <div className="select">
          {/* eslint-disable-next-line */}
          <select id="shadingStep" onChange={handleChange} {...props}>
            <option value="5">5%</option>
            <option value="1">1%</option>
          </select>
        </div>
      </div>
    </div>
  );
};

Select.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Select;
