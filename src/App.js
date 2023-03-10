import React, { useState, useEffect } from 'react';
import './App.css';
import Display from './componenets/Display';
import Stock from './componenets/Stock'

function App() {

  const [symbol, setSymbol] = useState();
  const [shares, setShares]  = useState();
  const [newPrice, setNewPrice] = useState();
  const [stockList, setStockList] = useState([]);

  useEffect(() =>{
    if (setSymbol !=null) {
    fetch(`https://api.polygon.io/v2/aggs/ticker/${symbol}/prev?adjusted=true&apiKey=Mrkl_Lab0ixmEeqXbeqBJiDxibsH8VUZ`)
    .then(res =>res.json())
      .then(data => {
        setNewPrice(data.results[0].c)
        console.log(newPrice)
      })
    }
  }, [symbol])
  

  const handleAddHolding = (stockName, quantity) => {
    const holding = {
      id: stockName,
      value: quantity
    };
    setStockList([...stockList, holding]);
    console.log(stockList)
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
                            <td>{newPrice}</td>
                            <td>{holding.value}</td>
                            <td>value</td>
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
