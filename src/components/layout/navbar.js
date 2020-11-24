import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import cn from "../../utils/cn";
import ExternalLink from "../external-link";
import { Icon, IconWrapper } from "../icon";
import Logo from "../logo";

const disableCurrentTab = ({ isCurrent }) =>
  isCurrent ? { "aria-disabled": "true" } : {};

/**
 * Renders the app's navigation bar
 */
const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <Nav
      aria-label="main navigation"
      className="navbar is-white"
      role="navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item logo" getProps={disableCurrentTab} to="/">
          <Logo />
        </Link>

        <MenuButton
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
        </MenuButton>
      </div>

      <div className={cn("navbar-menu", showMenu && "is-active")}>
        <div className="navbar-start">
          <Link className="navbar-item" getProps={disableCurrentTab} to="/">
            Home
          </Link>
          <Link
            className="navbar-item"
            getProps={disableCurrentTab}
            to="/accessibility"
          >
            Accessibility
          </Link>
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

const MenuButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  line-height: 1;
  padding: 0;

  &:focus {
    outline: 0;
  }
`;
