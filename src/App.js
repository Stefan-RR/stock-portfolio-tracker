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
  }

  return (
    <div className="App">
      <span className='top'>
        <Display
        />
      </span>
      <span className='bottom'>
        <Stock
          stockName={e => setSymbol(e.target.value)}
          quantity={e => setShares(e.target.value)}
          newPrice={e => setPrice(e.target.value).toFixed(2)}
          addStock={handleAddHolding}
        />
        <div className="holdingsTable">
            <table>
                <thead>
                    <tr>
                       <td>Stock</td> 
                       <td class="right">Value</td>
                    </tr>
                </thead>
                <tbody>
                {stockList.map(holding => {
                  
                  return <tr key={holding.id}>
                            <td className='stock-row'><span className='ticker'>{holding.id}</span><span className='info'>{holding.value} | ${holding.price.toFixed(2)}</span></td>
                            
                            <td className='val'>${holding.amount.toFixed(2)}</td>
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
