import React from 'react';
import styled from 'styled-components';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, deleteExpense, editExpense }) => {
  if (expenses.length === 0) {
    return <EmptyMessage>No expenses recorded yet. Add your first expense!</EmptyMessage>;
  }

  return (
    <ListContainer>
      <ListTitle>Expense History</ListTitle>
      <ListHeader className="desktop-only">
        <HeaderItem width="30%">Title</HeaderItem>
        <HeaderItem width="15%">Amount</HeaderItem>
        <HeaderItem width="20%">Category</HeaderItem>
        <HeaderItem width="20%">Date</HeaderItem>
        <HeaderItem width="15%">Actions</HeaderItem>
      </ListHeader>
      {expenses.map(expense => (
        <ExpenseItem 
          key={expense.id} 
          expense={expense} 
          deleteExpense={deleteExpense}
          editExpense={editExpense}
        />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  margin-top: 15px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    margin-top: 12px;
    
    .desktop-only {
      display: none;
    }
  }
`;

const ListTitle = styled.h2`
  padding: 12px 15px;
  margin: 0;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
  color: #333;
  font-size: 1.2rem;
  
  @media (max-width: 768px) {
    padding: 10px 12px;
    font-size: 1.1rem;
  }
`;

const ListHeader = styled.div`
  display: flex;
  background-color: #f9f9f9;
  padding: 10px 15px;
  border-bottom: 2px solid #e0e0e0;
  font-weight: bold;
  font-size: 0.9rem;
`;

const HeaderItem = styled.div`
  width: ${props => props.width || '20%'};
  padding: 5px;
`;

const EmptyMessage = styled.p`
  text-align: center;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  color: #666;
  font-style: italic;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    padding: 12px;
    font-size: 0.85rem;
  }
`;

export default ExpenseList;