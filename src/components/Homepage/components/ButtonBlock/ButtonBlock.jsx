import React from 'react';

import {ButtonsWrapper, Button, Text} from './ButtonBlockElements';

export const ButtonBlock = ({contentForButtonBlock}) => (
  <ButtonsWrapper>
    <Button>{contentForButtonBlock.registerButton.title}</Button>
    <Text>or</Text>
    <Button>{contentForButtonBlock.loginButton.title}</Button>
  </ButtonsWrapper>
);
