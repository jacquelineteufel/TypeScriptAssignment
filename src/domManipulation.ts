import { tipTotal, tipPerPerson, tipTotalCurrency, tipPerPersonCurrency } from "./htmlResults"
import { billResult, billPerPersonResult, billResultCurrency, billPerPersonResultCurrency } from "./calculation"

export function updateResult() {
    tipTotal.innerHTML = `${billResult.toFixed(2)} €`
    tipPerPerson.innerHTML = `${billPerPersonResult.toFixed(2)} €`
  }
  
  export function updateResultForeignCurrency() {
    tipTotalCurrency.innerHTML = `${billResultCurrency} €`
    tipPerPersonCurrency.innerHTML = `${billPerPersonResultCurrency} €`
  }