class Calculator {

    constructor() {
        this.displayValue = "";//public attribute or class field
    }//end constructor

}//end class

webCalculator = new Calculator;
var isClear = false
function InputDigit(digit) {
    
    if(isClear == true){
        webCalculator.displayValue = digit;
        isClear =false;
    }
    else{
        webCalculator.displayValue += digit; 
    }
    UpdateDisplay();
    
}//end function

function InputOperator(operator) {
    webCalculator.displayValue += " " + operator + " ";
    UpdateDisplay();
    isClear = false;
}//end function

function UpdateDisplay() {
    //SELECT INPUT ELEMENT
    var inputRef = document.querySelector(".calculator-screen");

    //UPDATE INPUT ELEMENT
    inputRef.value = webCalculator.displayValue;
}//end function


function AllClear() {
    webCalculator.displayValue = "0";
    UpdateDisplay();
    isClear = true

}//end function


function Calculate(){
   let prob = webCalculator.displayValue;
   let answer = eval(prob);
   webCalculator.displayValue = answer;
   UpdateDisplay();
   isClear = true;
}

    



//TO DO complete calculator