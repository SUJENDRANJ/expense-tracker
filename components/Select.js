import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #2196f3;
    outline: none;
    box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.2);
  }
`;

const Select = ({ id, name, value, onChange, children }) => {
  return (
    <StyledSelect
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    >
      {children}
    </StyledSelect>
  );
};

export default Select;