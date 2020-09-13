import copy from "copy-to-clipboard";
import PropTypes from "prop-types";
import React from "react";
import { useTheme } from "styled-components";
import { SmallActiveButton } from "../../buttons/invisible";
import { Icon, IconWrapper } from "../../icon";
import { StyledInfoItem } from "./styles";

const InfoItem = ({ copyText, displayText }) => {
  const { colors } = useTheme();
  const onClick = () => {
    copy(copyText || displayText, { format: "text/plain" });
  };

  return (
    <StyledInfoItem>
      <span>{displayText}</span>
      <IconWrapper
        as={SmallActiveButton}
        aria-label="Copy the color"
        color={colors.minGray}
        hoverColor="#000"
        size="small"
        onClick={onClick}
      >
        <Icon aria-hidden="true" icon="fa-copy" />
      </IconWrapper>
    </StyledInfoItem>
  );
};

export default InfoItem;

InfoItem.propTypes = {
  copyText: PropTypes.string,
  displayText: PropTypes.string.isRequired,
};
