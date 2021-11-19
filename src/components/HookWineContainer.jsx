import {useSelector,useDispatch} from "react-redux"
import { buyWine } from "../redux/wine/wineAction";

const HookWineContainer = () => {
    const numOfWine =useSelector(state =>state.wine.numOfWine)
    const dispatch = useDispatch()
    return ( 
        <div>
            <h2>number of wine : {numOfWine}</h2>
            <button onClick={()=>dispatch(buyWine())}>buy wine</button>
        </div>
     );
}
 
export default HookWineContainer;