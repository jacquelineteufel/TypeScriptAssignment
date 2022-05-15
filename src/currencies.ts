import { exchangeRates } from "./exchangeRates";
import { selector } from "./htmlResults";

export let result: number;

export function updateCurrencies() {
  const entries = Object.entries(exchangeRates.rates);
  entries.forEach(entries => {
    let option: HTMLOptionElement = document.createElement('option');
    option.innerHTML = `${entries[0]}`;
    selector.appendChild(option);

  })
}
export function getRateByName(rateName: string): number {
  const entries = Object.entries(exchangeRates.rates);
  entries.filter(entrie => {
    if (entrie[0] === rateName) {
      result = entrie[1]
      console.log(result)
    }
  })
  return result;
}
export function currentRate(): string {
  return selector.options[selector.selectedIndex].value;
}