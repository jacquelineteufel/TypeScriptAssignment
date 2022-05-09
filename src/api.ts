import { select } from "./htmlResults";

export let rates: any = {}

export function updateRates() {
  fetch('https://api.frankfurter.app/latest')
    .then((data) => data.json())
    .then((data) => {
      console.log(data.rates)
      rates = data.rates
    })
}
  //console.log(rates);


