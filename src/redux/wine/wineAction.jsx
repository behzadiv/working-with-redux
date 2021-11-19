import {BUY_WINE} from "./wineTypes"
export function buyWine(number=1){
    return{
        type:BUY_WINE,
        payload:number
    }
}