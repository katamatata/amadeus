import React from 'react';

import {ButtonsWrapper, Button, Text} from './ButtonBlockElements';

export const ButtonBlock = ({content}) => {
  const {register, text, login} = content;

  return (
    <ButtonsWrapper>
      <Button>{`${register}`}</Button>
      <Text>{`${text}`}</Text>
      <Button>{`${login}`}</Button>
    </ButtonsWrapper>
  );
};
