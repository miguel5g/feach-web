import React, { ReactNode, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { IconType } from 'react-icons/lib';

import { Label, StyledTextArea } from './styles';

interface ITextAreaProps {
  name: string;
  title: string | ReactNode;
  icon?: IconType;
  type?: string;
  maxLength?: number;
  placeholder?: string;
}

const TextArea: React.FC<ITextAreaProps> = ({
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
      <StyledTextArea ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Label>
  );
};

export default TextArea;
