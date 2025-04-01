import './App.css'
import Title from "./components/title.tsx"
import Intro from "./components/intro.tsx"
import Hobby2 from "./components/hobby2.tsx"

function App() {

  return (
      <>
        <Title title={"CS3733-D25 Team 23: Cooking and Listening to Music Albums"}/>

        <Intro name1={"Krish Patel"} name2={"Colin Hoar"}/>

        <Hobby2 />
      </>
  )
}

export default App
