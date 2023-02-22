import React, { useState, useEffect } from 'react';
import './App.css';
import Display from './componenets/Display';
import Stock from './componenets/Stock'
import Holdings from './componenets/Holdings'

function App() {

  const [symbol, setSymbol] = useState();
  const [shares, setShares]  = useState();
  const [newPrice, setNewPrice] = useState();

  useEffect(() =>{
    if (setSymbol !=null) {
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=9FYPSKB2VPFSVLU5`)
    .then(res =>res.json())
      .then(data => {
        console.log(data)
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

         />
      </span>
    </div>
  );
}

export default App;
