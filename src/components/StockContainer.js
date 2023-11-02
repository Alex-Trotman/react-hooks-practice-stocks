import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleClick }) {
  // function handleClick(name) {
  //   console.log(name);
  // }

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => {
        return (
          <Stock
            key={stock.name}
            name={stock.name}
            price={stock.price}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}

export default StockContainer;
