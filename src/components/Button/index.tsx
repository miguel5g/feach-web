import React from 'react';

import { StyledButton } from './styles';

interface Props {
  primary?: boolean;
  disable?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = ({ primary, disable, ...rest }) => (
  <StyledButton primary={primary} disable={disable} {...rest} />
);

export default Button;
