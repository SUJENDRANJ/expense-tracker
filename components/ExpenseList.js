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
      <ListHeader>
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
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const ListTitle = styled.h2`
  padding: 15px 20px;
  margin: 0;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
  color: #333;
`;

const ListHeader = styled.div`
  display: flex;
  background-color: #f9f9f9;
  padding: 10px 20px;
  border-bottom: 2px solid #e0e0e0;
  font-weight: bold;
`;

const HeaderItem = styled.div`
  width: ${props => props.width || '20%'};
  padding: 5px;
`;

const EmptyMessage = styled.p`
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  color: #666;
  font-style: italic;
`;

export default ExpenseList;