import {
  billAmount,
  personAmount,
  tipTotal,
  tipPerPerson,
  output,
  tipAmount,
  button,
} from './htmlResults'

billAmount.addEventListener('input', billInput)
personAmount.addEventListener('input', personInput)
tipAmount.addEventListener('input', tipInput)
button.addEventListener('click', calculate)

let bill: number = 0.00
let persons: number = 1
let tip: number = 10.00

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

export function calculate() {
    tip = parseFloat(tipAmount.value)
  //tipAmount.valuie is always number
   persons = parseInt(personAmount.value)
   bill  = parseFloat(billAmount.value)

  if (tip = 0) {
    alert('amount not set')
  }
  if (bill <= 0) {
    alert('amount not set')
    return;
  }
  if (persons <= 0) {
    alert('amount not set')
    return;
  }
  let percentageTip :number = 0.01 * tip;

  let billWithTip :number = bill * (tip /100) + bill;
  console.log("calculate:" + percentageTip.toFixed(2));
  tipTotal.innerText = billWithTip.toFixed(2);


  let billPerPerson :number = billWithTip / persons;
  tipPerPerson.innerText = billPerPerson.toFixed(2);

}
