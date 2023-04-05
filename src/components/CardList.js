import React from "react";
import Card from "./Card";

const cardList = function ({ robots }) {
  // // how to throw errors in js
  // if (true) {
  //   throw new Error('NOOOO!')
  // }
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            ></Card>
          );
        })
      }
    </div>
  
  )
  }

export default cardList;