import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';


function App() {

  const action = ['backlog', 'todo', 'inprogress', 'done']
  const [newTask, setNewTask] = useState("");

  const [boards, setBoards] = useState([
    {
      id: 0,
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
      id: 1,
      title: action[1],
      cards: []
    },
    {
      id: 2,
      title: action[2],
      cards: []
    },
    {
      id: 3,
      title: action[3],
      cards: []
    }


  ])

  const changeHandler = (event) => {
    setNewTask(event.target.value);
  }

  const addCard = () => {
    const tempBoards = [...boards];

    tempBoards[0].cards.push({
      id: Date.now() + Math.random() * 2,
      name: newTask,
      stage: 0
    });
    
    setBoards(tempBoards);
    setNewTask("")
  };

  const removeCard = (bid, cid) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    // To remove card
    cards.splice(cardIndex, 1);
    setBoards(tempBoards);
  };

  const goForward = (bid, cid) => {
    const board_id = bid + 1;

    if (board_id <= 3) {

      const tempBoards = [...boards];
      const cards = tempBoards[bid].cards;

      const cardIndex = cards.findIndex((item) => item.id === cid);
      if (cardIndex < 0) return;

      // To store card that gets deleted
      const removed_card = cards[cardIndex];

      //Deletion of card
      cards.splice(cardIndex, 1);
      
      // Adding card to next board (i.e board + 1)
      tempBoards[board_id].cards.push(removed_card);
      setBoards(tempBoards);      
    }
    else {
      return;
    }
  }

  const goBackward = (bid, cid) => {
    const board_id = bid - 1;

    if (board_id >= 0) {

      const tempBoards = [...boards];
      const cards = tempBoards[bid].cards;

      const cardIndex = cards.findIndex((item) => item.id === cid);
      if (cardIndex < 0) return;

      // To store card that gets deleted
      const removed_card = cards[cardIndex];

      //Deletion of card
      cards.splice(cardIndex, 1);
      
      // Adding card to next board (i.e board + 1)
      tempBoards[board_id].cards.push(removed_card);
      setBoards(tempBoards);

    }
    else {
      return;
    }
  }



  return (
    <div className='app'>
      <div className='app_navbar'>
        <h2>Kanban</h2>
      </div>

      <div className="app_title">
        <input type="text" value={newTask} onChange={changeHandler} placeholder="New task name"></input>
        <button type="submit" className="btn btn-primary ml-2" onClick={addCard}>Create Task</button>
      </div>

      <div className='app_boards_container'>
        <div className='app_boards'>
          {
            boards.map((item) => (
              <Board key={item.id}
                board={item}
                removeCard={removeCard}
                goForward={goForward}
                goBackward={goBackward}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
