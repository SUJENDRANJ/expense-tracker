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
  gap: 15px;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 12px;
  }
`;

const SummaryCard = styled.div`
  flex: 1;
  background-color: #f0f8ff;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const SummaryTitle = styled.h3`
  margin: 0 0 8px 0;
  color: #555;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 6px;
  }
`;

const SummaryValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2196f3;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export default Summary;