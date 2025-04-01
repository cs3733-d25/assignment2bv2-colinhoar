import List2 from "./list2.tsx"
import Table2 from "./table2.tsx"
import Form2 from "./form2.tsx"
import sling from "../images/sling.png";

const Hobby2 = ()=> {
    return(
        <>
            <h1>Colin Hoar - Listening to Music Albums</h1>
            <img src={sling} alt="Sling album cover photo" />
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

            <List2 />
            <Table2 />
            <Form2 />
        </>
    )
}

export default Hobby2