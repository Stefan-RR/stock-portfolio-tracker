function Stock({ stockName, quantity }) {
    return (
        <div>
            <input type='text' onChange={stockName}></input>
            <input type='number' onChange={quantity}></input>
        </div>
    )
}

export default Stock