import { useState } from "react"

function Stock({ stockName, quantity, addStock }) {
    const [text, setText] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        addStock(text)
    }


    return (
        <form onSubmit={handleSubmit} className="form">
            <label>Stock Name</label>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)}></input>
            <label>Number of Shares</label>
            <input type='number' onChange={quantity}></input>
            <button type='submit'>Add</button>
        </form>
    )
}

export default Stock