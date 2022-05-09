//Imports
import { bill, persons, tip } from './addEventListeners'
import { updateRates } from './api';

//Deklarierung
export let billResult: number
export let billPerPersonResult: number


//Rechnungsfunktion
export function calculate() {
  updateRates();
  billResult = bill * (tip / 100) + bill
  billPerPersonResult = billResult / persons

}
export function calculateCurrency(){

}
