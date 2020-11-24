import copy from "copy-to-clipboard";
import PropTypes from "prop-types";
import React from "react";
import { useTheme } from "styled-components";
import { SmallActiveButton } from "../../buttons/invisible";
import { Icon } from "../../icon";
import { StyledInfoItem, StyledIconWrapper } from "./styles";

const InfoItem = ({ copyText, displayText, ...props }) => {
  const { colors } = useTheme();
  const onClick = () => {
    copy(copyText || displayText, { format: "text/plain" });
  };

  return (
    <StyledInfoItem {...props}>
      <span>{displayText}</span>
      <StyledIconWrapper
        as={SmallActiveButton}
        aria-label="Copy the color"
        color={colors.minGraphicalGray}
        hoverColor="#000"
        size="small"
        onClick={onClick}
      >
        <Icon aria-hidden="true" icon="far fa-copy" />
      </StyledIconWrapper>
    </StyledInfoItem>
  );
};

export default InfoItem;

InfoItem.propTypes = {
  copyText: PropTypes.string,
  displayText: PropTypes.string.isRequired,
};
