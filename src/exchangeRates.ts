import { selector } from "./htmlResults"

export const exchangeRates = {
    
        "amount": 1,
        "base": "EUR",
        "date": "2022-05-11",
        "rates": {
            "AUD": 1.5055,
            "BGN": 1.9558,
            "BRL": 5.3859,
            "CAD": 1.3685,
            "CHF": 1.0446,
            "CNY": 7.0893,
            "CZK": 25.365,
            "DKK": 7.4393,
            "GBP": 0.85393,
            "HKD": 8.2839,
            "HRK": 7.5365,
            "HUF": 379.13,
            "IDR": 15309,
            "ILS": 3.6148,
            "INR": 81.49,
            "ISK": 139.3,
            "JPY": 137.07,
            "KRW": 1343.99,
            "MXN": 21.387,
            "MYR": 4.6185,
            "NOK": 10.1793,
            "NZD": 1.6645,
            "PHP": 54.992,
            "PLN": 4.6575,
            "RON": 4.947,
            "SEK": 10.526,
            "SGD": 1.4622,
            "THB": 36.492,
            "TRY": 16.1851,
            "USD": 1.0553,
            "ZAR": 16.9275
        }
    }

    export let result :number;
    
    export function updateCurrencies(){
        const entries = Object.entries(exchangeRates.rates);
        entries.forEach(entries => {
        let option : HTMLOptionElement = document.createElement('option');
          option.innerHTML = `${entries[0]}`;
          selector.appendChild(option);
         
        })
    } 
    export function getRateByName(rateName :string) :number{
        const entries = Object.entries(exchangeRates.rates);
          entries.filter(entrie => {
            if(entrie[0] === rateName){
              result = entrie[1]
              console.log(result)
        }
    })
    return result;
    }
    export function currentRate() :string{
       return selector.options[selector.selectedIndex].value;
    }
