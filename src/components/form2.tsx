const Form2 = ()=>{
    return(
        <>
            <h2>Recommendations</h2>
            <form>
                <label htmlFor="Recommendation">Enter recommendation (song, album, or artist):</label>
                <input type="text" id="Recommendation"/>
                <br/><br/>
                <label htmlFor="Genre">Enter what genre the recommendation is under:</label>
                <input type="text" id="Genre"/>
                <br/><br/>
                <label htmlFor="Popular">More information:</label>
                <br/>
                <input type="checkbox" id="Popular"/>
                <label htmlFor="Popular">Popular?</label>
                <br/>
                <input type="checkbox" id="Favorite"/>
                <label htmlFor="Favorite">Favorite?</label>
                <br/>
                <input type="checkbox" id="highlyRated"/>
                <label htmlFor="highlyRated">Highly Rated?</label>
                <br/><br/>
                <label htmlFor="Song">Kind of recommendation:</label>
                <br/>
                <input type="radio" id="Song" name="recommendationType"/>
                <label htmlFor="Song">Song?</label>
                <br/>
                <input type="radio" id="Album" name="recommendationType"/>
                <label htmlFor="Album">Album?</label>
                <br/>
                <input type="radio" id="Artist" name="recommendationType"/>
                <label htmlFor="Artist">Artist?</label>
                <br/><br/>
                <label htmlFor="Comments">Comments:</label>
                <br/>
                <textarea id="Comments"></textarea>
                <br/><br/>
                <label htmlFor="Rating">Your rating of the recommendation:</label>
                <select name="Rating" id="Rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br/><br/>
                <button type="button">Submit</button>
            </form>
        </>
    )
}

export default Form2;