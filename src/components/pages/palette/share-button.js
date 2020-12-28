import { useLocation } from "@reach/router";
import copy from "copy-to-clipboard";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import cn from "../../../utils/cn";
import { Icon, IconWrapper } from "../../icon";

const delay = 2000;
const shareData = {
  className: "is-link",
  disabled: false,
  icon: "fas fa-share",
  text: "Share",
};
const copyData = {
  className: "is-dark",
  disabled: true,
  icon: "fas fa-check",
  text: "Copied!",
};

const ShareButton = ({ className, ...props }) => {
  const { href } = useLocation();
  const [button, setButton] = useState(shareData);
  let timeout;

  const onClick = () => {
    copy(href, { format: "text/plain" });
    setButton(copyData);
    timeout = setTimeout(() => {
      setButton(shareData);
    }, delay);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, [timeout]);

  return (
    <button
      className={cn("button", button.className, className)}
      disabled={button.disabled}
      onClick={onClick}
      {...props}
    >
      <IconWrapper key={button.icon} size="small">
        <Icon aria-hidden="true" icon={button.icon} />
      </IconWrapper>
      <span>{button.text}</span>
    </button>
  );
};

export default ShareButton;

ShareButton.propTypes = {
  className: PropTypes.string,
};
