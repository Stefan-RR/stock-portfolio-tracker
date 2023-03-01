function Holdings({ stocks }) {
    return (
        <div className="holdingsTable">
            <table>
                <th>Stock</th>
                <th># of Shares</th>
                <th>Value</th>
                    {stocks}
            </table>
        </div>
    )
}
export default Holdings