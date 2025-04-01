const Hobby1 = () => {
    return(
        <>
            <h1>Krish Patel- Cooking </h1>

            <p>
                In my free time I love to cook. Being a Vegetarian, I particularly enjoy the art of cooking.
                Not being limited to a small variety of options is awesome! My favorite dishes to cook consist of Panner
                Tikka Masala, Mac and Cheese, and Bean burritos.
                These are my go-to specials. On days that I have a little more time, I like to make pizza, and pastas. I
                also enjoy having my friends try the dishes and provide feedback on how it can be better. I
                have linked three of my favorite recipes for you to try! Happy Cooking!
            </p>

            <h2> My Cooking Process: </h2>
            <ol>
                <li> Prepping</li>
                <li> Gathering</li>
                <li> Cooking</li>
                <li> Plating</li>
                <li> Eating</li>
                <li> Cleaning</li>

            </ol>
            <table className="collapse" align="center">
                <caption> Krish's Favorite Dishes</caption>
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

            </table>

            <h2> Join My Mailing List! </h2>
            <p> Get the best recipes, personally handpicked by me, FOR FREE!!</p>

            <form>
                <h3> Contact Information</h3>
                <label htmlFor="fullname">Please Enter Your Full Name:</label>
                <input type="text" id="fullname"/>
                <br/>

                <label htmlFor="email">Please Enter Your Email:</label>
                <input type="text" id="email"/>
                <br/>


                <h3> Dietary Focus</h3>

                <input type="Checkbox" id="LowProtein"/>
                <label htmlFor="LowProtein">Low Protein</label>
                <br/>
                <input type="Checkbox" id="LowCalories"/>
                <label htmlFor="LowCalories">Low Calories</label>
                <br/>
                <input type="Checkbox" id="LowCarbs"/>
                <label htmlFor="LowCarbs">Low Carbs</label>
                <br/>
                <input type="Checkbox" id="HighProtein"/>
                <label htmlFor="HighProtein">High Protein</label>
                <br/>
                <input type="Checkbox" id="HighCalories"/>
                <label htmlFor="HighCalories">High Calories</label>
                <br/>
                <input type="Checkbox" id="HighCarbs"/>
                <label htmlFor="HighCarbs">High Carbs</label>
                <br/>

                <h3> Recipe Preferences </h3>
                <input type="Radio" id="veg" name="preferences" value="veg"/>
                <label htmlFor="veg">Vegetarian</label>
                <br/>
                <input type="Radio" id="non-veg" name="preferences" value="non-veg"/>
                <label htmlFor="veg">Non-Vegetarian</label>
                <br/>
                <input type="Radio" id="pesc" name="preferences" value="pesc"/>
                <label htmlFor="pesc">Pescetarian</label>
                <br/>
                <input type="Radio" id="gfree" name="preferences" value="gfree"/>
                <label htmlFor="gfree">Gluten Free</label>
                <br/>
                <input type="Radio" id="np" name="preferences" value="np"/>
                <label htmlFor="np">No Preference</label>
                <br/>
                <h3> Mailing Frequency </h3>
                <label htmlFor="frequency"> Choose your mail frequency:</label>
                <select id="frequency" name="frequency">
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                </select>

                <h3> Additional Information </h3>
                <label htmlFor="AdditionalInfo"> Enter any additional information, such as allergies or specific food
                    you prefer to avoid:</label>
                <br/>
                <textarea id="AdditionalInfo" name="AdditionalInfo" ></textarea>
                <br/>
                <button type="button"> Submit!</button>

            </form>


        </>


    )


}

export default Hobby1;