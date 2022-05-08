//Imports
import { bill, persons, tip } from './addEventListeners'

//Deklarierung
export let billResult: number
export let billPerPersonResult: number


//Rechnungsfunktion
export function calculate() {
  billResult = bill * (tip / 100) + bill
  billPerPersonResult = billResult / persons
}
