import { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board/Board';
import { v4 } from 'uuid';


const initialTask = [
  {
    id: 0,
    title: "Backlog",
    cards: [
      {
        id: v4(),
        name: "Card 1",
        stage: 0
      },
      {
        id: v4(),
        name: "Card 2",
        stage: 0
      }
    ]
  },
  {
    id: 1,
    title: "To Do",
    cards: []
  },
  {
    id: 2,
    title: "Inprogress",
    cards: []
  },
  {
    id: 3,
    title: "Done",
    cards: []
  }


];


const App = () => {

  const [boards, setBoards] = useState(initialTask);
  const [newTask, setNewTask] = useState("");

  // useEffect() is used to render some data before any other component gets loaded
  useEffect(() => {
    const localBoards = localStorage.getItem("boards");

    if (localBoards) {
      setBoards(JSON.parse(localBoards))
    }
  }, []
  )

  // If there is some minor change in "boards" then do all the stuff did in callback
  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boards));
  }, [boards]
  )

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
