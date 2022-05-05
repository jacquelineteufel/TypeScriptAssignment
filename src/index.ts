//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

import { billInput} from "./addEventListeners";
import { personInput} from "./addEventListeners";
import { tipInput } from "./addEventListeners";

billInput();
personInput();
tipInput(); 

let test:number=10;
console.log("test" + test/100);


/*
function calculateTip(bill:number, tipPercentage:number, persons:number) :number{
  return (bill * (tipPercentage / 100) / persons) //+ (bill/persons);
}
console.log(calculateTip(50, 10, 5));
*/


