import React, { useState } from "react";

function Stock({ name, price, handleClick }) {
  // const [isOn, setIsOn] = useState(false);
  // function handleClick() {
  //   console.log("Clicked!");
  //   setIsOn(!isOn);
  // }
  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={() => handleClick(name)}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
