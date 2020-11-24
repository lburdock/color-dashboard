import PropTypes from "prop-types";
import React from "react";
import { DangerTag, SuccessTag } from "./styles";

/**
 * Returns a success or failure tag
 */
const ContrastStatus = ({ pass }) =>
  pass ? <SuccessTag>Pass</SuccessTag> : <DangerTag>Fail</DangerTag>;

export default ContrastStatus;

ContrastStatus.propTypes = {
  pass: PropTypes.bool.isRequired,
};
