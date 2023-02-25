function Stock({ stockName, quantity, addStock }) {
    return (
        <form>
            <label>Stock Name</label>
            <input type='text' onChange={stockName}></input>
            <label>Number of Shares</label>
            <input type='number' onChange={quantity}></input>
            <button onClick={addStock}>Add</button>
        </form>
    )
}

export default Stock