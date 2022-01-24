import { useState } from 'react';
import './App.css';
import Board from './components/Board';

const intialTask = [

  { name: '1', stage: 0 },

  { name: '2', stage: 0 },

];

function App() {

  const action = ['backlog', 'todo', 'inprogress', 'done']

  const [boards, setBoards] = useState([
    {
      id: Date.now() + Math.random() * 2,
      title: action[0],
      cards: [
        {
          id: Date.now() + Math.random(),
          name: "Card 1",
          stage: 0
        },
        {
          id: Date.now() + Math.random(),
          name: "Card 2",
          stage: 0
        }
      ]
    },
    {
      id: Date.now() + Math.random() * 2,
      title: action[1],
      cards: []
    },
    {
      id: Date.now() + Math.random() * 2,
      title: action[2],
      cards: []
    },
    {
      id: Date.now() + Math.random() * 2,
      title: action[3],
      cards: []
    }


  ])



  return (
    <div className='app'>
      <div className='app_navbar'>
        <h2>Kanban</h2>
      </div>

      <div className="app_title">
        <input type="text" placeholder="Enter title"></input>
        <button type="submit" class="btn btn-primary ml-2" >Add</button>
      </div>

      <div className='app_outer'>
        <div className='app_boards'>
          {
            boards.map((item) => (
              <Board key={item.id} board={item} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
