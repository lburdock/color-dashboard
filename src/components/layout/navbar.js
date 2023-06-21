import React from "react";
import { useLocation } from "@reach/router";
import styled from "styled-components";
import logoSvg from "../../images/palette-solid.svg";
import cn from "../../utils/cn";
import { ExternalLink, NavLink } from "../links";
import { Icon, IconWrapper } from "../icon";
import { useColorState } from "../../state/color-context";
import {
  formatColorSearchParams,
  getColorsFromSearchParams,
} from "../../utils/routing";

const getHref = ({ to, colors: existingColors = [], limit, search }) => {
  const colorArray = existingColors?.length
    ? existingColors
    : getColorsFromSearchParams(search);
  const truncatedColors = limit ? colorArray.slice(0, limit) : colorArray;
  return `${to}${formatColorSearchParams(truncatedColors)}`;
};

/**
 * Renders the app's navigation bar
 */
const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const { palette, shade, accessibility } = useColorState();
  const { search } = useLocation();

  return (
    <Nav
      aria-label="main navigation"
      className="navbar is-white"
      role="navigation"
    >
      <div className="navbar-brand">
        <NavLink className="logo" to="/">
          <StyledImg alt="Color Dashboard" size="28px" src={logoSvg} />
        </NavLink>

        <button
          aria-expanded={showMenu}
          aria-label="menu"
          className={cn("navbar-burger burger", showMenu && "is-active")}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div className={cn("navbar-menu", showMenu && "is-active")}>
        <div className="navbar-start">
          <NavLink to={getHref({ to: "/", colors: palette, search })}>
            Palette
          </NavLink>
          <NavLink
            to={getHref({
              to: "/accessibility",
              colors: accessibility,
              limit: 2,
              search,
            })}
          >
            Accessibility
          </NavLink>
          <NavLink
            to={getHref({
              to: "/shade-generator",
              colors: shade,
              limit: 1,
              search,
            })}
          >
            Shade generator
          </NavLink>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <ExternalLink
              className="button is-text"
              href="https://github.com/lburdock/color-dashboard"
            >
              <IconWrapper aria-label="Github" size="medium">
                <Icon icon="fab fa-github" />
              </IconWrapper>
            </ExternalLink>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  a[aria-disabled="true"] {
    pointer-events: none;
    text-decoration: none;
  }

  a[aria-disabled="true"],
  .navbar-item:focus {
    background: ${({ theme }) => theme.colors.lightBackground};
  }

  .logo {
    background: transparent !important;
  }
`;

const StyledImg = styled.img`
  height: ${({ size }) => size};
  width: auto;
`;
