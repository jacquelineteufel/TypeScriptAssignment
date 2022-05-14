//Imports der Variablen und Funktionen
import { billAmount, personAmount, output, tipAmount, button } from './htmlResults'
import { calculateTip, calculateCurrency} from './calculation'
import { updateResult, updateResultForeignCurrency } from './domManipulation'
import { convertCompilerOptionsFromJson } from '../node_modules/typescript/lib/typescript'


//Eventlistener
billAmount.addEventListener('input', () => {
  billInput()
  calculateTip()
  updateResult()
})
personAmount.addEventListener('input', () => {
  personInput()
  calculateTip()
  updateResult()
})
tipAmount.addEventListener('input', () => {
  tipInput()
  calculateTip()
  updateResult()
})
button.addEventListener('click', () => {
calculateCurrency()
updateResultForeignCurrency()
})

//Deklarierung 
export let bill: number = 1.0
export let persons: number = 1
export let tip: number = 0.2

//Funktionen
export function billInput() {
  bill = parseFloat(billAmount.value)
  console.log(bill)
}

export function personInput() {
  persons = parseFloat(personAmount.value)
  console.log(persons)
}
export function tipInput() {
  tip = parseFloat(tipAmount.value)
  output.innerText = tip.toString()
  console.log(tip)
}