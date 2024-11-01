import { useRef } from "react";

function AvgMarks(){
    const math = useRef(null);
    const sci = useRef(null);
    const soc = useRef(null);
    const eng = useRef(null);
    const avg = useRef(null);

    const handleAction = () => {
        const mat = parseInt(math.current.value);
        const sc = parseInt(sci.current.value);
        const ss = parseInt(soc.current.value);
        const en = parseInt(eng.current.value);

        const avrage = mat+sc+ss+en;

        avg.current.value = avrage;
    }
    return(
        <>
            <h1>Average Marks</h1>
            <input ref={math} 
        </>
    )
}