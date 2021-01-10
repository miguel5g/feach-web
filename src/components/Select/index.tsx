/* eslint-disable no-unused-vars */
import React from 'react';

import { Label, StyledSelect } from './styles';

interface ISelectProps {
  name: string;
  title: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  // ⬆ Depois tentar entender o porquê o eslint reclama de no-unused-vars
}

const Select: React.FC<ISelectProps> = ({ title, ...rest }) => (
  <Label>
    {title}
    <StyledSelect {...rest} />
  </Label>
);

export default Select;
