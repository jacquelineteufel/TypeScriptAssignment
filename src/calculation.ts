//Imports
import { bill, persons, tip } from './addEventListeners'
import { updateRates } from './api';

//Deklarierung
export let billResult: number
export let billResultCurrency: number
export let billPerPersonResult: number
export let billPerPersonResultCurrency :number 




//Rechnungsfunktion
export function calculateTip() {
  //updateRates();
  billResult = bill * (tip / 100) + bill
  billPerPersonResult = billResult / persons

}
export function calculateCurrency(){
  updateRates();
  billResultCurrency = billResult // * test
  console.log("1Ergebnis" + billResultCurrency)
  billPerPersonResultCurrency = billPerPersonResult // * test
  console.log("2Ergebnis" + billPerPersonResultCurrency)
}
