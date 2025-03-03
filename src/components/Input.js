import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #2196f3;
    outline: none;
    box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.2);
  }
  
  &::placeholder {
    color: #aaa;
  }
  
  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    padding: 7px;
    font-size: 0.85rem;
  }
`;

const Input = ({ type, id, name, value, onChange, placeholder, step, min, max, disabled }) => {
  return (
    <StyledInput
      type={type || 'text'}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      step={step}
      min={min}
      max={max}
      disabled={disabled}
    />
  );
};

export default Input;