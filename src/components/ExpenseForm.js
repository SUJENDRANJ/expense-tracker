import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import Select from './Select';

const ExpenseForm = ({ addExpense, editingExpense, updateExpense }) => {
  const [expense, setExpense] = useState({
    title: '',
    amount: '',
    category: 'general',
    date: new Date().toISOString().substr(0, 10)
  });

  // Update form when editing an expense
  useEffect(() => {
    if (editingExpense) {
      setExpense(editingExpense);
    }
  }, [editingExpense]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!expense.title || !expense.amount) {
      alert('Please fill in all required fields');
      return;
    }

    if (editingExpense) {
      updateExpense(expense);
    } else {
      addExpense(expense);
    }

    // Reset form
    setExpense({
      title: '',
      amount: '',
      category: 'general',
      date: new Date().toISOString().substr(0, 10)
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>{editingExpense ? 'Edit Expense' : 'Add New Expense'}</FormTitle>
      
      <FormGroup>
        <label htmlFor="title">Title</label>
        <Input
          type="text"
          id="title"
          name="title"
          value={expense.title}
          onChange={handleChange}
          placeholder="Expense title"
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="amount">Amount</label>
        <Input
          type="number"
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          placeholder="Amount"
          step="0.01"
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="category">Category</label>
        <Select
          id="category"
          name="category"
          value={expense.category}
          onChange={handleChange}
        >
          <option value="general">General</option>
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
          <option value="entertainment">Entertainment</option>
          <option value="utilities">Utilities</option>
          <option value="other">Other</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <label htmlFor="date">Date</label>
        <Input
          type="date"
          id="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
        />
      </FormGroup>

      <Button 
        type="submit" 
        color={editingExpense ? "#4caf50" : "#2196f3"}
      >
        {editingExpense ? 'Update Expense' : 'Add Expense'}
      </Button>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    padding: 12px;
    margin-bottom: 15px;
  }
`;

const FormTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 15px;
  color: #333;
  font-size: 1.3rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 12px;
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
    font-size: 0.9rem;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export default ExpenseForm;