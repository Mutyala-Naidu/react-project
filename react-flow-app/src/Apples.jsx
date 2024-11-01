import { useState } from "react";

function Apples(){
    const [apples,setApples] = useState(0)

    return(
        <>
            <h1>Number of apples: {apples}</h1>
            <p>{apples>0 ?"you have some apples":"no apples left"}</p>
            <button onClick={()=>setApples(apples+1)}>inc</button>
            <button onClick={apples>0? ()=>setApples(apples-1): ()=>setApples(0)}>dec</button>
            <button onClick={()=>setApples(0)}>reset</button>

            {/* <h1>Numbers of apples: {apples}</h1>
            {apples > 0 ? <p>you have some apples </p> : <p>No apples</p>}
            <button onClick={()=>setApples(apples+1)}>inc</button>
            <button onClick={()=>apples>0 && setApples(apples-1)}>dec</button>
            <button onClick={()=>setApples(0)}>reset</button> */}
        </>
    )
}
export default Apples;