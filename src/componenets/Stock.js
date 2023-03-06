import { useState } from "react"

function Stock({ addStock }) {
    const [stockName, setStockName] = useState("")
    const [quantity, setQuantity] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addStock(stockName, quantity)
    }


    return (
        <form onSubmit={handleSubmit} className="form">
            <label>Stock Name</label>
            <input type='text' value={stockName} onChange={(e) => setStockName(e.target.value)}></input>
            <label>Number of Shares</label>
            <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
            <button type='submit'>Add</button>
        </form>
    )
}

export default Stock