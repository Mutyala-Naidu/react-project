import { useState } from "react"

function Discount(){
    const orgprice = 1347
    const [discountPrice, setDiscountPrice] = useState(0)
    const [discount, setDiscount] = useState(0)

    const applyDiscount = (discountValue)=>{
        if(discountValue == 10){
            setDiscountPrice(orgprice*0.1)
            setDiscount(10)
        }
        else if(discountValue == 20){
            setDiscountPrice(orgprice*0.2)
            setDiscount(20)
        }
        else if(discountValue == 30){
            setDiscountPrice(orgprice*0.3)
            setDiscount(30)
        }
        else{
            setDiscountPrice(orgprice*0)
            setDiscount(0)
        }
    }


    return(
        <>
            <h1>Price of thr product: ${orgprice}</h1>
            <p>Disconted Price: ${discountPrice.toFixed(2)}</p>
            <p>Applied Discount: {discount}%</p>
            <button onClick={()=>applyDiscount(10)}>10%</button>
            <button onClick={()=>applyDiscount(20)}>20%</button>
            <button onClick={()=>applyDiscount(30)}>30%</button>
            <button onClick={()=>applyDiscount(0)}>Reset</button>

        </>
    )
}
export default Discount;