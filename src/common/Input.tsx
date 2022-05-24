import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
`;

const InputStyled = styled.input`
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  border: none;
  padding: 5px 0 5px 10px;
  background-color: inherit;
  color: inherit;
  border-bottom: 2px solid white;
`;

type InputProps = {
  type: string,
  id: string,
  label?: string,
  value?: string,
  placeholder?: string,
  onChange: (inputData: string) => void,
}

const Input = ({
  type = 'text',
  id,
  label,
  value,
  placeholder = '',
  onChange,
}: InputProps) => (
  <InputWrapper>
    <label htmlFor={id}>{label}</label>
    <InputStyled
      name={id}
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(evt) => onChange(evt.target.value)}
    />
  </InputWrapper>
)

export default Input;
