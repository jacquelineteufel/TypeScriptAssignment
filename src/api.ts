import { select} from "./htmlResults";

let result : number = 1;

export function updateRates() {
  fetch('https://api.frankfurter.app/latest')
    .then((data) => data.json())
    .then((data) => {
      display(data.rates)
    })
}

  export function display(rates : object) {
    const entries = Object.entries(rates);
    entries.forEach(entrie => {
      let option : HTMLOptionElement = document.createElement('option');
      option.innerHTML = `${entrie[0]}`;
      select.appendChild(option);
    })
  }

  export function getRateByName(rateName : string) : number{
    fetch('https://api.frankfurter.app/latest')
    .then((data) => data.json())
    .then((data) => {
      const entries = Object.entries(data.rates);
      entries.filter(entrie => {
        if(entrie[0] === rateName){
          result = entrie[1] as number;
          
        }
      })
    })
    return result;
  }
  