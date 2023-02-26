import './App.css';
import Expenses from './components/Expenses';
function App()
{
  // let expenseDate=new Date(2022,10,26);
  // let expenseTitle="car insurance";
  // let expensePrice=200;
  let expenses=[
    {
      id:'e1',
      title:'car service',
      price:500,
      date:new Date(2022,5,23)
    },
    {
      id:'e2',
      title:'school fee',
      price:1500,
      date:new Date(2022,6,29)
    },
    {
      id:'e3',
      title:'bike servicing',
      price:800,
      date:new Date(2022,5,13)
    },
    {
      id:'e4',
      title:'food',
      price:100,
      date:new Date(2022,4,16)
    },
  ];

  return(
  <div>
    <h2 className='record'>Expense Record</h2>
    <Expenses item={expenses}/>
  </div>
  );
}
export default App;