import React, { useState, useEffect } from 'react';
import './App.css';
import Display from './componenets/Display';
import Stock from './componenets/Stock'
import Holdings from './componenets/Holdings'

function App() {

  const [symbol, setSymbol] = useState();

  useEffect(() =>{
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=9FYPSKB2VPFSVLU5`)
    .then(res =>res.json())
      .then(data => {
      })
  }, [symbol])

  return (
    <div className="App">
      <span className='top'>
        <Display />
      </span>
      <span className='bottom'>
        <Stock
          stockName={setSymbol}
        />
        <Holdings />
      </span>
    </div>
  );
}

export default App;
