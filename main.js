// Build a basic Arithmetic Calculator without a Frontend

alert("WELCOME TO ARITHMETIC CALCULATOR!");

const operation = window.prompt("Which arithmetic operation would you like to perform?\n1: Addition, \n2: Subtraction, \n3: Multiplication \n4: Division."); 

if (operation == 1) {
    //ADDITION OPERATION
    function additionOperation() {
        const firstvalue = parseFloat(window.prompt("Enter your addend: "));
        const secondvalue = parseFloat(window.prompt("Enter your addend: "));
        const sum = firstvalue + secondvalue;
        alert("The sum of "+ firstvalue+ " and " +secondvalue +" is " + sum);
    }
    additionOperation()
  } else if (operation == 2) {
    //SUBTRACTION OPERATION  
    function subtractionOperation() {
        const firstvalue = window.prompt("Enter your minuend: ");
        const secondvalue = window.prompt("Enter your subtrahend: ");
        const difference = firstvalue - secondvalue;
        alert("The difference between " + firstvalue + " and " + secondvalue + " is " + difference);
    }
    subtractionOperation()
} else if (operation == 3) {
    //MULTIPLICATION OPERATION
    function multiplicationOperation() {
        const firstvalue = window.prompt("Enter your multiplicand: ");
        const secondvalue = window.prompt("Enter your multiplier: ");
        const product = firstvalue * secondvalue;
        alert("The product of "+firstvalue+" and "+secondvalue+" is " + product);
    }
    multiplicationOperation()
} else {
    //DIVISION OPERATION
    function divisionOperation() {
        const firstvalue = window.prompt("Enter your dividend: ");
        const secondvalue = window.prompt("Enter your divisor: ");
        const quotient = firstvalue / secondvalue;
        alert("Dividing "+firstvalue+" by "+secondvalue+" gives " + quotient);
    }
    divisionOperation()
}