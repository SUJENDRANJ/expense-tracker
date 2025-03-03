import React, { useReducer, useState, useEffect } from 'react';
import styled from 'styled-components';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';

// Initial state for our expense tracker
const initialState = {
  expenses: [],
  editingExpense: null
};

// Reducer function to handle state changes
function expenseReducer(state, action) {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, { ...action.payload, id: Date.now() }]
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense.id !== action.payload)
      };
    case 'SET_EDITING':
      return {
        ...state,
        editingExpense: action.payload
      };
    case 'UPDATE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map(expense => 
          expense.id === action.payload.id ? action.payload : expense
        ),
        editingExpense: null
      };
    default:
      return state;
  }
}

// Main App component
function App() {
  const [state, dispatch] = useReducer(expenseReducer, initialState);
  const [totalExpense, setTotalExpense] = useState(0);

  // Calculate total expenses whenever expenses change
  useEffect(() => {
    const total = state.expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
    setTotalExpense(total);
  }, [state.expenses]);

  // Add a new expense
  const addExpense = (expense) => {
    dispatch({ type: 'ADD_EXPENSE', payload: expense });
  };

  // Delete an expense
  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: id });
  };

  // Set an expense for editing
  const editExpense = (expense) => {
    dispatch({ type: 'SET_EDITING', payload: expense });
  };

  // Update an existing expense
  const updateExpense = (updatedExpense) => {
    dispatch({ type: 'UPDATE_EXPENSE', payload: updatedExpense });
  };

  return (
    <AppContainer>
      <AppTitle>Expense Tracker</AppTitle>
      <ExpenseForm 
        addExpense={addExpense} 
        editingExpense={state.editingExpense}
        updateExpense={updateExpense}
      />
      <Summary totalExpense={totalExpense} expenseCount={state.expenses.length} />
      <ExpenseList 
        expenses={state.expenses} 
        deleteExpense={deleteExpense} 
        editExpense={editExpense}
      />
    </AppContainer>
  );
}

// Styled components
const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const AppTitle = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
`;

export default App;