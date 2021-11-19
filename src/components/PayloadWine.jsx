import { useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import { buyWine } from "../redux/wine/wineAction";

const PayloadWine = () => {
    const numOfWine =useSelector(state =>state.wine.numOfWine)
    const dispatch = useDispatch()
    const[number,setNumber]=useState()
    return ( 
        <div>
            <h2>number of wine : {numOfWine}</h2>
            <input type="text" onChange={e=>setNumber(e.target.value)}/>
            <button onClick={()=>dispatch(buyWine(number))}>buy {number} wine</button>
        </div>
     );
}
 
export default PayloadWine;