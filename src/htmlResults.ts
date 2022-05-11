
export let billAmount: HTMLInputElement = <HTMLInputElement>document.getElementById("bill-amount");
export let personAmount: HTMLInputElement = <HTMLInputElement>document.getElementById("personen");
export let tipAmount: HTMLInputElement = <HTMLInputElement>document.getElementById("tip-range");
export let output: HTMLInputElement = <HTMLInputElement>document.getElementById("tip-display");
export let tipPerPerson: HTMLInputElement = <HTMLInputElement>document.getElementById("per-person-amount");
export let tipTotal: HTMLInputElement = <HTMLInputElement>document.getElementById("total-amount");
export const select:  HTMLInputElement = <HTMLInputElement>document.getElementById("currency-selector");
export const button:  HTMLInputElement = <HTMLInputElement>document.getElementById("currency-calculate-button");
export let tipPerPersonCurrency: HTMLInputElement = <HTMLInputElement>document.getElementById("per-person-amount-foreign-currency");
export let tipTotalCurrency: HTMLInputElement = <HTMLInputElement>document.getElementById("total-amount-foreign-currency");





billAmount.value = "0.00";
personAmount.value = "1";
tipTotal.value = "€" + (0.00).toFixed(2);
tipPerPerson.value = "€" + (0.00).toFixed(2);
tipAmount.value = "0";
output.value="0";
tipPerPersonCurrency.value = "€" + (0.00).toFixed(2);
tipTotalCurrency.value = "€" + (0.00).toFixed(2);







    

   

