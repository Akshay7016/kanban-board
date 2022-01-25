import React from "react";
import {ArrowLeftCircle, ArrowRightCircle, Trash2 } from "react-feather";

import "./Card.css";

function Card(props) {

  const { id } = props.card;

  return (

    <div className="card" >
      <div className="card_title">{props.card?.name}</div>

      <div className="card_footer">
        <p onClick={() => props.goBackward(props.boardId, id)}>{<ArrowLeftCircle />}</p>
        <p onClick={() => props.goForward(props.boardId, id)}>{<ArrowRightCircle />}</p>
        <p onClick={() => props.removeCard(props.boardId, id)}>{<Trash2 />}</p>
      </div>
    </div>
  );
}

export default Card;