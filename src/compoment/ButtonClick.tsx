import React from 'react'
type CheckButton ={
    clickk :( event:React.MouseEvent<HTMLButtonElement>,i:number)=>void,
    changee : (event : React.ChangeEvent<HTMLInputElement>)=>void,
    value :string,
    styles : React.CSSProperties
}
const ButtonClick = ({clickk,changee,value,styles}:CheckButton) => {
    const handle =(event:React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        clickk(event,9);
    }
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        event.preventDefault()
        console.log(event.target.value);
        
    }
    return (
        <div>
            <h2 style={styles}>manh duc vu</h2>
            <button onClick={handle}>clickNow</button>
            <input type="text" onChange={(event)=>changee(event)} />
        </div>
    )
}

export default ButtonClick
