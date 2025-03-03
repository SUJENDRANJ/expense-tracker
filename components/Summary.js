import React from 'react';
import styled from 'styled-components';

const Summary = ({ totalExpense, expenseCount }) => {
  return (
    <SummaryContainer>
      <SummaryCard>
        <SummaryTitle>Total Expenses</SummaryTitle>
        <SummaryValue>${totalExpense.toFixed(2)}</SummaryValue>
      </SummaryCard>
      
      <SummaryCard>
        <SummaryTitle>Number of Expenses</SummaryTitle>
        <SummaryValue>{expenseCount}</SummaryValue>
      </SummaryCard>
    </SummaryContainer>
  );
};

const SummaryContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const SummaryCard = styled.div`
  flex: 1;
  background-color: #f0f8ff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const SummaryTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #555;
  font-size: 1rem;
`;

const SummaryValue = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #2196f3;
`;

export default Summary;