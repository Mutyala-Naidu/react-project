import React from 'react'
import { useRef } from 'react'

function Addition() {
    const num1Ref = useRef(null);
    const num2Ref = useRef(null);
    const resultRef = useRef(null);

    const handleAction = () => {
        const n1 = parseInt(num1Ref.current.value);
        const n2 = parseInt(num2Ref.current.value);

        const sum = n1 + n2;

        resultRef.current.value = sum;
    }
  return (
    <>
      <h1>Addition</h1>
      <input ref={num1Ref} type='number' placeholder='enter first num'/><br></br><br></br>
      <input ref={num2Ref} type='number' placeholder='enter second num'/><br></br><br></br>
      <button onClick={handleAction}>add</button><br></br><br></br>
      <input ref={resultRef} type='text' placeholder='result' readOnly/><br></br>

    </>
  )
}

export default Addition
