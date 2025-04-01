type IntroProps = {
    name1: string
    name2: string
}

const Intro = ({name1, name2}: IntroProps) => {
    return (
        <>
            <p> Hello everyone, my name is {name1}. I am originally from Gujrat, India, but I have lived in Salem, New Hampshire for the past 10 years.
                I am a second year CS major here at WPI. On campus I am involved in Clubs such as South Asian Student Association, and Coffee Club.
                Alongside that I am also a Crimson Key Tour Guide.
                I also enjoy playing various intramural sports such as Volleyball, Basketball and Soccer.</p>
            <br />
            <p>My name is {name2}, and I am a Junior Computer Science student at WPI.
                I first started programming at a small one-week summer camp when I was
                a very young teenager, but was never in a scenario where I was consistently
                programming until my sophomore year of high school when I took my first
                official in-school coding course. I took 4 programming courses in high school,
                and decided to stick with it going into college. In my free time, I enjoy
                playing video games with my friends, playing piano, and listening to music.
            </p>
        </>
    )
}

export default Intro