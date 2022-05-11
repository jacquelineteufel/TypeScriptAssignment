import { tipTotal, tipPerPerson, tipTotalCurrency, tipPerPersonCurrency, selector } from "./htmlResults"
import { billResult, billPerPersonResult, billResultCurrency, billPerPersonResultCurrency } from "./calculation"
import { currentRate, exchangeRates } from "./exchangeRates"





export function updateResult() {
    tipTotal.innerHTML = `${billResult.toFixed(2)} €`
    tipPerPerson.innerHTML = `${billPerPersonResult.toFixed(2)} €`
  }
  

  export function updateResultForeignCurrency() {
    tipTotalCurrency.innerHTML = `${billResultCurrency} ${currentRate()}`
    tipPerPersonCurrency.innerHTML = `${billPerPersonResultCurrency} ${currentRate()}`
  }