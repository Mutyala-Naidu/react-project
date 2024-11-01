import React, { useRef } from 'react'

function AllOpe() {
    const num1Ref = useRef(null);
    const num2Ref = useRef(null);
    const resultRef = useRef(null);

    const handleAction = (ope) => {
        const n1 = parseInt(num1Ref.current.value);
        const n2 = parseInt(num2Ref.current.value);
        
        let result;
        switch(ope){
            case 'add':
                result = n1+n2;
                break;
            case 'sub':
                result = n1-n2;
                break;
            case 'mul':
                result = n1*n2;
                break;
            case 'div':
                result = n1/n2;
                break;
        }
        resultRef.current.value = result;
        
    }
  return (
    <>
      <h1>All Operatios</h1>
      <input ref={num1Ref} type='number' placeholder='enter first num'/><br></br><br></br>
      <input ref={num2Ref} type='number' placeholder='enter second num'/><br></br><br></br>
      <button onClick={handleAction('add')}>add</button>
      <button onClick={handleAction('sub')}>sub</button>
      <button onClick={handleAction('mul')}>mul</button>
      <button onClick={handleAction('div')}>div</button><br></br><br></br>
      <input ref={resultRef} type='text' placeholder='result' readOnly/><br></br>

    </>
  )
}

export default AllOpe;
