import {combineReducers} from "redux"
import cakeReducer from "./cake/cakeReducer"
import iceCreamReducer from "./iceCream/iceCreamReducer"
import wineReducer from "./wine/wineReducer";

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    wine:wineReducer,
})

export default rootReducer;