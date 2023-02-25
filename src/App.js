import React, { useState, useEffect } from 'react';
import './App.css';
import Display from './componenets/Display';
import Stock from './componenets/Stock'
import Holdings from './componenets/Holdings'

function App() {

  const [symbol, setSymbol] = useState();
  const [shares, setShares]  = useState();
  const [newPrice, setNewPrice] = useState();
  const [amount, setAmount] = useState();

  useEffect(() =>{
    if (setSymbol !=null) {
    fetch(`https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/day/2023-02-24/2023-02-24?apiKey=Mrkl_Lab0ixmEeqXbeqBJiDxibsH8VUZ`)
    .then(res =>res.json())
      .then(data => {
        console.log(data.results[0].c)
        setNewPrice(data.results[0].c)
      })
    }
  }, [symbol])



  return (
    <div className="App">
      <span className='top'>
        <Display />
      </span>
      <span className='bottom'>
        <Stock
          stockName={e => setSymbol(e.target.value)}
          quantity={e => setShares(e.target.value)}
        />
        <Holdings
          stocks = {amount}
         />
      </span>
    </div>
  );
}

export default App;
