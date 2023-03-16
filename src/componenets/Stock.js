import { useState } from "react"

function Stock({ addStock }) {
    const [stockName, setStockName] = useState("")
    const [quantity, setQuantity] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addStock(stockName, quantity)
    }
    const handleName = (e) => {
        setStockName(e.target.value)
        fetch(`https://finnhub.io/api/v1/quote?symbol=${stockName}&token=cfpsonhr01qmi6j4b280cfpsonhr01qmi6j4b28g`)
                .then(res =>res.json())
                  .then(data => {
                    console.log(data.c)
                    console.log(stockName)
                  }) 
                
                
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <label>Stock Name</label>
            <input type='text' value={stockName} onChange={handleName}></input>
            <label>Number of Shares</label>
            <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
            <button type='submit'>Add</button>
        </form>
    )
}

export default Stock