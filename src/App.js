import React, { useState, useEffect } from 'react';
import './App.css';
import Display from './componenets/Display';
import Stock from './componenets/Stock'
import Holdings from './componenets/Holdings'

function App() {

  const [symbol, setSymbol] = useState();
  const [shares, setShares]  = useState();
  const [newPrice, setNewPrice] = useState();
  const [stockList, setStockList] = useState([]);

  useEffect(() =>{
    if (setSymbol !=null) {
    fetch(`https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/day/2023-02-24/2023-02-24?apiKey=Mrkl_Lab0ixmEeqXbeqBJiDxibsH8VUZ`)
    .then(res =>res.json())
      .then(data => {
        setNewPrice(data.results[0].c)
      })
    }
  }, [symbol])
  

  function holding(symbol, shares) {
    const holding = {
      symbol: symbol,
      shares: shares
    };
    setStockList([...stockList, holding]);
  }
  
  return (
    <div className="App">
      <span className='top'>
        <Display />
      </span>
      <span className='bottom'>
        <Stock
          stockName={e => setSymbol(e.target.value)}
          quantity={e => setShares(e.target.value)}
          addStock={e => holding}
        />
        <Holdings
          {...stockList.map(holding => {
            <tr id={holding.name} >{holding}</tr>
          })}
         />
      </span>
    </div>
  );
}

export default App;
