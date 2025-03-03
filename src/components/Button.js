import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.color || '#2196f3'};
  color: white;
  padding: ${props => props.small ? '5px 10px' : '8px 16px'};
  border-radius: 4px;
  border: none;
  font-size: ${props => props.small ? '0.8rem' : '0.9rem'};
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${props => {
      const color = props.color || '#2196f3';
      return adjustColor(color, -20);
    }};
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  @media (max-width: 768px) {
    padding: ${props => props.small ? '4px 8px' : '6px 12px'};
    font-size: ${props => props.small ? '0.75rem' : '0.85rem'};
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