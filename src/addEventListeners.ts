import {
  billAmount,
  personAmount,
  tipTotal,
  tipPerPerson,
  output,
  tipAmount,
  
} from './htmlResults'


billAmount.addEventListener('input', ()=>{billInput();
    calculate();
    updateResult();
})
personAmount.addEventListener('input', ()=>{personInput();
    calculate();
    updateResult();
})
tipAmount.addEventListener('input',()=> {tipInput();
    calculate();
    updateResult();
})


let bill: number = 1.00;
let persons: number = 1;
let tip: number = 0.2;
let billResult :number;
let billPerPersonResult :number;

export function billInput() {
  bill = parseFloat(billAmount.value)
  console.log(bill)
}

export function personInput() {
  persons = parseFloat(personAmount.value)
  console.log(persons)
}
export function tipInput() {
  tip = parseFloat(tipAmount.value);   
  output.innerText = tip.toString()     
  console.log(tip)
}

export function calculate() {
    
 billResult = bill * (tip/100) + bill;
 billPerPersonResult = billResult / persons;
  
}

export function updateResult(){

  tipTotal.innerHTML = `${billResult.toFixed(2)} €`;
  tipPerPerson.innerHTML =`${billPerPersonResult.toFixed(2)} €`;

}
