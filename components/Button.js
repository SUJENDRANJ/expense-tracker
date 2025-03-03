import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.color || '#2196f3'};
  color: white;
  padding: ${props => props.small ? '6px 12px' : '10px 20px'};
  border-radius: 4px;
  border: none;
  font-size: ${props => props.small ? '0.9rem' : '1rem'};
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${props => {
      const color = props.color || '#2196f3';
      return adjustColor(color, -20);
    }};
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

// Helper function to darken/lighten colors
const adjustColor = (color, amount) => {
  return color;
  // In a real implementation, this would adjust the color
  // But for simplicity, we're just returning the original color
};

const Button = ({ children, color, small, onClick, type, className }) => {
  return (
    <StyledButton 
      color={color} 
      small={small} 
      onClick={onClick} 
      type={type || 'button'}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;