function Holdings({ stocks }) {
    return (
        <div className="holdingsTable">
            <table>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Shares</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks}
                </tbody>
            </table>
        </div>
    )
}
export default Holdings