//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

//Imports
import { billInput} from "./addEventListeners";
import { personInput} from "./addEventListeners";
import { tipInput } from "./addEventListeners";
import { display, getRateByName, updateRates } from "./api";
import { initiateCurrency } from "./currencySelector";


//Ausführung der Funktionen
initiateCurrency();
billInput();
personInput();
tipInput(); 
updateRates();
console.log("Test" + getRateByName("AUD"))





