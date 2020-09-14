import React from 'react';

import {DesktopSubtitle, MobileSubtitle} from './SubtitleElements';

export const Subtitle = ({desktopSubtitle, mobileSubtitle}) => (
  <>
    <DesktopSubtitle>{desktopSubtitle}</DesktopSubtitle>
    <MobileSubtitle>{mobileSubtitle}</MobileSubtitle>
  </>
);
