
import './App.css';
import TodoList from './components/TodoList'
import {useState} from 'react'
function App() {
const [showTodos, setShowTodos] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo application</h1>
        <button onClick={()=>{setShowTodos(!showTodos)}}>Get todos</button>
        {showTodos && <TodoList/>}
      </header>
    </div>
  );
}

export default App;
