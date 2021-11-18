import { useSelector , useDispatch} from "react-redux"
import { buyIceCream } from "../redux/iceCream/iceCreamAction";
const IceCreamContainer = () => {
   const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
   const dispatch = useDispatch()
   return ( <div>
        <h2>number of iceCream : {numOfIceCream} </h2>
        <button onClick={()=>dispatch(buyIceCream())}>buy iceCream</button>
    </div> );
}
 
export default IceCreamContainer;