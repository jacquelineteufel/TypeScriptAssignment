//Imports
import { bill, persons, tip } from './eventListeners'
import { getRateByName, currentRate } from './currencies'


//Deklarierung
export let billResult: number
export let billPerPersonResult: number
export let billResultCurrency: number
export let billPerPersonResultCurrency: number


//Rechnungsfunktion
export function calculateTip() {
  billResult = bill * (tip / 100) + bill
  billPerPersonResult = billResult / persons
}

export function calculateCurrency() {
  billResultCurrency = billResult * parseFloat(getRateByName(currentRate()).toFixed(2));
  billPerPersonResultCurrency = billPerPersonResult * parseFloat(getRateByName(currentRate()).toFixed(2));
}

