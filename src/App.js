import { useState } from 'react';
import './App.css';
import Board from './components/Board';

const intialTask = [

  { name: '1', stage: 0 },

  { name: '2', stage: 0 },

];

function App() {

  const action = ['backlog', 'todo', 'inprogress', 'done']

  const [newTask, setNewTask] = useState("");

  const [task, setTask] = useState(intialTask);

  const addTaskHandler = (newTask) => {
    const updatedTask = [newTask, ...task];
    setTask(updatedTask);
    console.log(task);
  }

  const changeHandler = (event) => {
    setNewTask(event.target.value);
  }

  return (
    <div className='app'>
      <div className='app_navbar'>
        <h2>Kanban</h2>
      </div>

      <div className="app_title">
        <input type="text" value={newTask} onChange={changeHandler} placeholder="Enter title"></input>
        <button type="submit" class="btn btn-primary ml-2" onClick={addTaskHandler}>Add</button>
      </div>

      <div className='app_outer'>
        <div className='app_boards'>
          <Board board_name={action[0]} />
          <Board board_name={action[1]} />
          <Board board_name={action[2]} />
          <Board board_name={action[3]} />
        </div>
      </div>
    </div>
  );
}

export default App;
