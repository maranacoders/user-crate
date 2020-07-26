/* eslint-disable */
import React from 'react';

import { Wrapper } from './button.styles';

const Button = ({ className, children, textColor, bgColor }) => (
  <Wrapper className={className} textColor={textColor} bgColor={bgColor}>
    {children}
  </Wrapper>
);

export default Button;
