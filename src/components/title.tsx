import {ReactElement} from "react";

type HeadingProps = { title: string }


// this is the heading tag for the page
// heading props definition instead of putting it into the declaration
const Title = ({ title }: HeadingProps): ReactElement => {
    return (
       <h1> {title} </h1>
    )
}

export default Title