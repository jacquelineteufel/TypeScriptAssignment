import { tipTotal, tipPerPerson, tipTotalCurrency, tipPerPersonCurrency, selector } from "./htmlResults"
import { billResult, billPerPersonResult, billResultCurrency, billPerPersonResultCurrency } from "./calculation"
import { currentRate } from "./currencies"



export function updateResult() {
  tipTotal.innerHTML = `${billResult.toFixed(2)} €`
  tipPerPerson.innerHTML = `${billPerPersonResult.toFixed(2)} €`
}

export function updateResultForeignCurrency() {
  tipTotalCurrency.innerHTML = `${billResultCurrency.toFixed(2)} ${currentRate()}`
  tipPerPersonCurrency.innerHTML = `${billPerPersonResultCurrency.toFixed(2)} ${currentRate()}`
}