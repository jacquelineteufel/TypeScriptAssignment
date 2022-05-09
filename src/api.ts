
export let rates : object = {};

export function updateRates(){
    fetch('https://api.frankfurter.app/latest').then((data) => data.json())
.then((data) => {
    console.log(data.rates);
  rates = data.rates;
});
//console.log(rates);
}