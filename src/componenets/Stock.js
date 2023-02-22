function Stock({ stockName, quantity, addStock }) {
    return (
        <div>
            <input type='text' onChange={stockName}></input>
            <input type='number' onChange={quantity}></input>
            <button onClick={addStock}>Add</button>
        </div>
    )
}

export default Stock