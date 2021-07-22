import PropTypes from "prop-types";
import React from "react";
import { DangerTag, SuccessTag, WarningTag } from "./styles";

/**
 * Returns a success or failure tag
 */
const ContrastStatus = ({ pass, useWarning }) => {
  if (pass) return <SuccessTag>Pass</SuccessTag>;

  if (useWarning) return <WarningTag>Fail</WarningTag>;

  return <DangerTag>Fail</DangerTag>;
}

export default ContrastStatus;

ContrastStatus.propTypes = {
  pass: PropTypes.bool.isRequired,
};
