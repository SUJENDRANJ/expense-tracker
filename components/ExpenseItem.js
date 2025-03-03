import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ExpenseItem = ({ expense, deleteExpense, editExpense }) => {
  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      food: '#FF5722',
      transportation: '#2196F3',
      entertainment: '#9C27B0',
      utilities: '#FFC107',
      general: '#607D8B',
      other: '#795548'
    };
    return colors[category] || colors.general;
  };

  return (
    <ItemContainer>
      <ItemDetail width="30%">{expense.title}</ItemDetail>
      <ItemDetail width="15%">${parseFloat(expense.amount).toFixed(2)}</ItemDetail>
      <ItemDetail width="20%">
        <CategoryBadge color={getCategoryColor(expense.category)}>
          {expense.category}
        </CategoryBadge>
      </ItemDetail>
      <ItemDetail width="20%">{formatDate(expense.date)}</ItemDetail>
      <ItemDetail width="15%">
        <ButtonGroup>
          <ActionButton 
            color="#4CAF50" 
            small 
            onClick={() => editExpense(expense)}
          >
            Edit
          </ActionButton>
          <ActionButton 
            color="#F44336" 
            small 
            onClick={() => deleteExpense(expense.id)}
          >
            Delete
          </ActionButton>
        </ButtonGroup>
      </ItemDetail>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  padding: 12px 20px;
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const ItemDetail = styled.div`
  width: ${props => props.width || '20%'};
  padding: 5px;
  display: flex;
  align-items: center;
`;

const CategoryBadge = styled.span`
  background-color: ${props => props.color};
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  text-transform: capitalize;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
`;

const ActionButton = styled(Button)`
  padding: 5px 10px;
  font-size: 0.8rem;
`;

export default ExpenseItem;