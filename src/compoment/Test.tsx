
import React, { useState } from 'react'
import { names,persons} from './Props.styles'
type Checkk ={
    children : string,
    name :names[]
}
const Test = (props:Checkk) => {
    const [name, setName] = useState(false)
    return (
        <div>
           {props.name &&props.name.map((vl,idx)=>{
            return (
                <p key={idx}>{vl.first} {vl.last}</p>
            )
           })}
        </div>
    )
}

export default Test
