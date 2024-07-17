import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';
import { Typography , Box } from '@mui/material';
import { styled } from '@mui/system';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransacation from './components/NewTransactions';
import Transactions from './components/Transactions';


const Header = styled(Typography)`
  margin: 10px 0;
  font-size: 50px;
  color: black;
  font-weight:50px;

`;
const StyledComponent = styled(Box)`
  display: flex;
  & > div {
  height : 70vh;
  padding : 10px;
  width : 50%;

  }
  justify-content: space-between; /* Example styling for flex layout */
`;


function App() {
  const [transactions , setTransactions] = useState([
    {id : 1 , text : 'momos' , amount : -20},
    {id : 2 , text : 'salary' , amount : 30000},
    {id : 3 , text : 'books' , amount : -100},
    {id : 4 , text : 'bonus' , amount : 1500}
  ])

  return (
    <div className="App">
      <Header>Expense Tracker</Header>
      <StyledComponent>
        <Box>
          <Balance transactions = {transactions} />
          <ExpenseCard transactions = {transactions}/>
          <NewTransacation setTransactions= {setTransactions}/> {/* Corrected the component name */}
        </Box>
        <Box>
          <Transactions transactions={transactions} setTransactions = {setTransactions}/>  
        </Box>
        </StyledComponent>
    </div>
  );
}

export default App;