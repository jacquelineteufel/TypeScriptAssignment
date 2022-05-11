//Imports der Variablen und Funktionen
import {
  billAmount,
  personAmount,
  tipTotal,
  tipPerPerson,
  output,
  tipAmount,
  button,
  tipTotalCurrency,
  tipPerPersonCurrency,
} from './htmlResults'

import { calculateTip, billPerPersonResult, billResult, calculateCurrency, billResultCurrency, billPerPersonResultCurrency } from './calculation'
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