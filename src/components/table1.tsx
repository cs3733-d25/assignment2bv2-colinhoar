const Table1 = () => {
    return (
        <table className="collapse" align="center">
            <caption> Krish's Favorite Dishes</caption>
            <tbody>
            <tr>
                <th> Food Name</th>
                <th> Type of Cuisine</th>
                <th> Number of Ingredients</th>
                <th> Cost</th>
                <th> Time</th>
                <th> Overall Rating</th>
            </tr>

            <tr>
                <td> Mac and Cheese</td>
                <td> European</td>
                <td> 5</td>
                <td> $15</td>
                <td> 20 Minutes</td>
                <td> 8/10</td>
            </tr>
            <tr>
                <td> Panner Tikka Masala</td>
                <td> Indian</td>
                <td> 12</td>
                <td> $28</td>
                <td> 30 Minutes</td>
                <td> 9/10</td>
            </tr>
            <tr>
                <td> Tacos</td>
                <td> Mexican</td>
                <td> 4</td>
                <td> $9</td>
                <td> 7 Minutes</td>
                <td> 7/10</td>
            </tr>
            <tr>
                <td> Pizza</td>
                <td> Italian</td>
                <td> 5</td>
                <td> $10</td>
                <td> 25 Minutes</td>
                <td> 8/10</td>
            </tr>
            </tbody>
        </table>
    )

}

export default Table1