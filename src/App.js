import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  return (
    <div className='main-div'>
      <h2 className='main-head'>Todo List</h2>
      <AddTodo/>
      <Todo/>
    </div>
  );
}

export default App;
