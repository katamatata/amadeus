import React from 'react';

import {ButtonsWrapper, Button, Text} from './ButtonBlockElements';

export const ButtonBlock = ({content}) => (
  <ButtonsWrapper>
    <Button>{content.register}</Button>
    <Text>{content.text}</Text>
    <Button>{content.login}</Button>
  </ButtonsWrapper>
);
