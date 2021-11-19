
import { BUY_WINE } from "./wineTypes";

const initialState = {
    numOfWine : 30,
}
const wineReducer = (state = initialState , action) => {
    switch (action.type) {
        case BUY_WINE:
            return{...state , numOfWine : state.numOfWine-1}
            break;
    
        default:
           return state
    }
}
 
export default wineReducer;