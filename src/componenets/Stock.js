import { useState } from "react"

function Stock({ addStock }) {
    const [stockName, setStockName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [newPrice, setNewPrice] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addStock(stockName, quantity)
    }
    const handleName = (e) => {
        fetch(`https://finnhub.io/api/v1/quote?symbol=${stockName}&token=cfpsonhr01qmi6j4b280cfpsonhr01qmi6j4b28g`)
                .then(res =>res.json())
                  .then(data => {
                    setNewPrice(data.c)
                    console.log(stockName)
                  }) 
    }
    const checkPrice = () => {
        if (stockName !=null) {
            console.log(newPrice)
        }
    }
    checkPrice()
    return (
        <form onSubmit={handleSubmit} className="form">
            <label>Stock Name</label>
            <input type='text' value={stockName} onChange={(e) => setStockName(e.target.value)} onBlur={handleName}></input>
            <label>Number of Shares</label>
            <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
            <label>Stock Price</label>
            <input type='number' value={newPrice} onChange={(e) => setNewPrice(e.target.value)}></input>
            <button type='submit'>Add</button>
        </form>
    )
}

export default Stock