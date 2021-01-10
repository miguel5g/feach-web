import React, { ReactNode, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { IconType } from 'react-icons/lib';

import { Label, StyledInput } from './styles';

interface IInputProps {
  name: string;
  title: string | ReactNode;
  icon?: IconType;
  type?: string;
  maxLength?: number;
  placeholder?: string;
}

const Input: React.FC<IInputProps> = ({
  name, title, icon, ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Label>
      <span>
        {title}
      </span>
      <StyledInput ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Label>
  );
};

export default Input;
