import PropTypes from "prop-types";
import React from "react";
import cn from "../../../utils/cn";
import InfoItem from "./info-item";
import { ColorSwatch, StyledCard, StyledInfo, StyledName } from "./styles";
import { getHslText, getRgbText } from "./utils";

const InfoSwatch = ({ children, className, colorString, name, ...props }) => {
  const rgb = getRgbText(colorString);
  const hsl = getHslText(colorString);
  return (
    <StyledCard className={cn("card", className)} {...props}>
      <ColorSwatch colorString={colorString} />
      <StyledInfo className="card-content">
        {name && <StyledName>{name}</StyledName>}
        <InfoItem displayText={colorString} />
        <InfoItem hideMobile displayText={rgb.display} copyText={rgb.copy} />
        <InfoItem hideMobile displayText={hsl.display} copyText={hsl.copy} />
      </StyledInfo>
      {children}
    </StyledCard>
  );
};

export default InfoSwatch;

InfoSwatch.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  colorString: PropTypes.string.isRequired,
  name: PropTypes.string,
};
