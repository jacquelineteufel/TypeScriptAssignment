//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!
import { billAmount } from "./htmlResults";
import { personAmount } from "./htmlResults"



function calculate(bill:number, tipPercentage:number, persons:number) :number{
  return (bill * (tipPercentage / 100) / persons) //+ (bill/persons);
}
//console.log(calculate(50, 10, 5));


