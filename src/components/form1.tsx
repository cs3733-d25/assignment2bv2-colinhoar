const Form1 = () => {
    return (
        <>
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

export default Form1