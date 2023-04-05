import React from "react";

const Scroll = function (props) {
  return (
    <div style={{overflowY: 'scroll', border: 'px solid black', height: '500px'}}>
      {props.children}
    </div>
  )
}
export default Scroll;