import React, { useState } from "react";
import { CheckSquare, Clock, MoreHorizontal, ArrowLeftCircle, ArrowRightCircle, Trash2 } from "react-feather";

import "./Card.css";

function Card(props) {

  return (

    <div className="card" >
      <div className="card_top">
        <div className="card_top_labels">

        </div>


      </div>
      <div className="card_title">Java Programming</div>
      <div className="card_footer">
        {/* <p>
          <Clock />
          29 Sept
        </p> */}

        {/* <CheckSquare />

        1/4 */}

        {<ArrowLeftCircle />}
        {<ArrowRightCircle />}
        {<Trash2 />}


      </div>
    </div>
  );
}

export default Card;