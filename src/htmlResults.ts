
export let billAmount: HTMLInputElement = <HTMLInputElement>document.getElementById("bill-amount");
export let personAmount: HTMLInputElement = <HTMLInputElement>document.getElementById("personen");
export let tipAmount: HTMLInputElement = <HTMLInputElement>document.getElementById("tip-range");
export let output: HTMLInputElement = <HTMLInputElement>document.getElementById("tip-display");
export let tipPerPerson: HTMLInputElement = <HTMLInputElement>document.getElementById("per-person-amount");
export let tipTotal: HTMLInputElement = <HTMLInputElement>document.getElementById("total-amount");
export const currency:  HTMLInputElement = <HTMLInputElement>document.getElementById("currency-selector");




billAmount.value = "0.00";
personAmount.value = "1";
tipTotal.value = "€" + (0.00).toFixed(2);
tipPerPerson.value = "€" + (0.00).toFixed(2);
tipAmount.value = "0";
output.value="0";






    

   

