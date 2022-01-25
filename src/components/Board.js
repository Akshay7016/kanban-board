import React from "react";

import Card from '../components/Card/Card'
import "./Board.css";

function Board(props) {

    return (
        <div className="board">
            <div className="board_top">
                <h4 className="board_top_title">
                    {props.board?.title}
                </h4>
            </div>
            <div className="board_cards custom-scroll">
                {props.board?.cards?.map((item) => (
                    <Card key={item.id}
                          card={item}
                          boardId={props.board.id}
                          removeCard={props.removeCard} 
                          goForward={props.goForward}
                          goBackward={props.goBackward}
                          />
                ))}
            </div>
        </div>
    );
}

export default Board;