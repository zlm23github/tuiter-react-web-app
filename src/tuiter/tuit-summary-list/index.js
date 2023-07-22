import React from "react";
import tuitArray from "./tuits.json"
import TuitSummaryItem from "./tuit-summary-item";

const TuitSummaryList = () => {
    return(
      <ul className="list-group">
        {
          tuitArray.map(tuit =>
            <TuitSummaryItem
              key={tuit.id}
              tuit={tuit}/>
          )
        }
      </ul>
    );
   };
   export default TuitSummaryList;