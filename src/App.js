import React, { useState, useEffect } from 'react';
import './App.css';
import Display from './componenets/Display';
import Stock from './componenets/Stock'

function App() {

  const [symbol, setSymbol] = useState();
  const [shares, setShares]  = useState();
  const [price, setPrice]  = useState();
  const [stockList, setStockList] = useState([]);
  
  const handleAddHolding = (stockName, quantity, newPrice) => {
    const holding = {
      id: stockName,
      value: quantity,
      price: newPrice,
      amount: quantity * newPrice
    };
    setStockList([...stockList, holding]);
    console.log(stockList)
  }
  
  

  return (
    <div className="App">
      <span className='top'>
        <Display/>
      </span>
      <span className='bottom'>
        <Stock
          stockName={e => setSymbol(e.target.value)}
          quantity={e => setShares(e.target.value)}
          newPrice={e => setPrice(e.target.value)}
          addStock={handleAddHolding}
        />
        <div className="holdingsTable">
            <table>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Shares</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                {stockList.map(holding => {
                  
                  return <tr key={holding.id}>
                            <td>{holding.id}</td>
                            <td>${holding.price.toFixed(2)}</td>
                            <td>{holding.value}</td>
                            <td>${holding.amount.toFixed(2)}</td>
                         </tr>
                    })}
                </tbody>
            </table>
        </div> 
      </span>
    </div>
  );
}

export default App;
