let billAmount: HTMLInputElement = <HTMLInputElement>document.getElementById("bill-amount");
let personAmount: HTMLInputElement = <HTMLInputElement>document.getElementById("personen");
let tipAmount: HTMLInputElement = <HTMLInputElement>document.getElementById("tip-range");
const sliders = document.querySelectorAll("input [type='range']");


sliders.forEach(function(slider){
    slider.addEventListener("input", calculateTip);
})

function calculateTip(){
     
}
export {billAmount, personAmount, tipAmount}