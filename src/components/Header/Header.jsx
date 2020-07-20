import React from 'react';

import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {ContentWrapper} from '../../common';
import {
  HeaderWrapper,
  NavBar,
  LogoLink,
  Logo,
  LogoTitle,
  Menu,
  MenuItem,
  NavLink,
} from './HeaderElements';

export const Header = ({content}) => (
  <HeaderWrapper>
    <ContentWrapper>
      <NavBar>
        <LogoLink to={content.logo.url}>
          <Logo src={content.logo.imageSrc} alt="Amadeus Logo" />
          <LogoTitle>{content.logo.title}</LogoTitle>
        </LogoLink>

        <Menu>
          <MenuItem>
            <NavLink to={content.navBar[0].url}>
              {content.navBar[0].title}
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to={content.navBar[1].url}>
              {content.navBar[1].title}
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to={content.navBar[2].url}>
              {content.navBar[2].title}
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to={content.navBar[3].url}>
              {content.navBar[3].title}
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to={content.navBar[4].url}>
              <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
          </MenuItem>
        </Menu>
      </NavBar>
    </ContentWrapper>
  </HeaderWrapper>
);
