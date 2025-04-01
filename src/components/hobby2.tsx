const Hobby2 = ()=> {
    return(
        <>
            <h1>Colin Hoar - Listening to Music Albums</h1>
            <div id="Sling">
                <img src="../assets/sling.png" width="300" alt="Sling album cover photo"/>
            </div>
            <p>
                Listening to albums is a really great hobby that I have only really picked
                up in recent years. In 2022, I wanted to try and expand my music taste by
                listening to an album a day. I failed pretty bad, with only having listened
                to about 100 albums by the end of the yer. I decided to try again in 2023,
                and pretty much did it, only having missed a few days, that I made up for.
                Due to me taking on this challenge, it kind of became a habit to listen
                to albums, because it was really fun for me, and it's a great way for me to
                connect with a few of my friends. It is always really awesome finding a
                new album that I really enjoy. The following is a list of my top favorite
                albums:
            </p>

            <ol>
                <li>Sling by Clairo (album cover above)</li>
                <li>Imaginal Disk by Magdalena Bay</li>
                <li>Homogenic by Björk</li>
                <li>God Don't Make Mistakes by Conway the Machine</li>
                <li>Dragon New Warm Mountain I Believe In You by Big Thief</li>
            </ol>

            <table className="collapse">
                <caption>Favorite New Albums 2024</caption>
                <tr>
                    <th>Album Name</th>
                    <th>Artist</th>
                    <th>Favorite Song</th>
                </tr>
                <tr>
                    <td>Imaginal Disk</td>
                    <td>Magdalena Bay</td>
                    <td>Cry for Me</td>
                </tr>
                <tr>
                    <td>Charm</td>
                    <td>Clairo</td>
                    <td>Terrapin</td>
                </tr>
                <tr>
                    <td>Bright Future</td>
                    <td>Adrianne Lenker</td>
                    <td>Free Treasure</td>
                </tr>
                <tr>
                    <td>Heavy Metal</td>
                    <td>Cameron Winter</td>
                    <td>Cancer of the Skull</td>
                </tr>
                <tr>
                    <td>SCRAPYARD</td>
                    <td>Quadeca</td>
                    <td>PRETTY PRIVILEGE</td>
                </tr>
            </table>

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
                <input type="submit" value="Submit" id="submitButton"/>
            </form>
        </>
    )
}

export default Hobby2