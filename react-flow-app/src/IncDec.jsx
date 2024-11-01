import { useState } from "react";

function IncDec(){
    const [count, setCount] = useState(0);

    const incrementbyOne = ()=>{
        setCount(count + 1);
    }
    const decrementbyOne = ()=>{
        setCount(count - 1);
    }

    return(
        <>
            <h1>the count value: {count}</h1>
            <button style={{color:"red"}} onClick={incrementbyOne}>increment</button>
            <button style={{color:"green"}} onClick={decrementbyOne}>decrement</button>
        </>
    )
}
export default IncDec;