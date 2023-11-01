import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks }) {

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => {
        return <Stock key={stock.name} name={stock.name} price={stock.price}/>
      })}
    </div>
  );
}

export default StockContainer;
