import { updateRates } from "./api";
import { currency } from "./htmlResults";
import { rates } from './api'

export function initiateCurrency(){
    updateRates();
    console.log(rates)
    
}