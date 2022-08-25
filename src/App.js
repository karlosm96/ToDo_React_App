import './App.css';
import './components/Tasks.jsx'
import TaskList from './components/TaskList';

function App() {
  
  return (
    <div className="App">
      <div className='todo-container'>
        <h1>ToDo List</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
