import { useState } from "react";

function Increment(){
    const [count,setCount] = useState(0)

    return(
        <>
            <h1>The count: {count}</h1>
            <button style={{color:"white"}} onClick={()=>setCount(count+1)}>increment</button>
        </>
    )
}
export default Increment;