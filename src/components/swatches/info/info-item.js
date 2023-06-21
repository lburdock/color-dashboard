import copy from "copy-to-clipboard";
import PropTypes from "prop-types";
import React from "react";
import { useTheme } from "styled-components";
import cn from "../../../utils/cn";
import { SmallActiveButton } from "../../buttons";
import { Icon, IconWrapper } from "../../icon";
import { StyledInfoItem } from "./styles";

const InfoItem = ({ copyText, displayText, hideMobile }) => {
  const { colors } = useTheme();
  const onClick = () => {
    copy(copyText || displayText, { format: "text/plain" });
  };

  return (
    <StyledInfoItem
      className={cn(
        "is-flex",
        "is-align-items-center is-justify-content-space-between",
        hideMobile && "is-hidden-mobile"
      )}
    >
      <span>{displayText}</span>
      <IconWrapper
        as={SmallActiveButton}
        aria-label="Copy the color"
        className="is-hidden-mobile"
        color={colors.minGraphicalGray}
        hoverColor="#000"
        size="small"
        onClick={onClick}
      >
        <Icon aria-hidden="true" icon="far fa-copy" />
      </IconWrapper>
    </StyledInfoItem>
  );
};

export default InfoItem;

InfoItem.propTypes = {
  copyText: PropTypes.string,
  displayText: PropTypes.string.isRequired,
  hideMobile: PropTypes.bool,
};
