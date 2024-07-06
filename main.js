//TASK_1---PRINT NUMBER
function PrintNum(){
        let number=document.getElementById('numInput').value;
        document.getElementById('output_1').innerHTML=`you entered:${number}`;
}
//var ll=99
//TASK_2---CHECK DIVISIBILITY
function checkDivisibility(){
        let number=document.getElementById('divideInput').value;
        document.getElementById('output_2').innerHTML=`you entered:${number}`;
}
//TASK_3---FIND MAX

var number_1 = prompt("Enter  1st number:");
 var number_2 = prompt("Enter  2nd number:");
 if(number_1>number_2){
     console.log(number_1);
 }else if(number_1<number_2){
     console.log(number_2);
 }else{
     console.log(" Equal to each other");
 }

 //TASK_4---POSITIVE OR NEGATIVE
 let number=prompt("Enter number:");
 if(number<0){
        console.log("nagative");
    }else{
        console.log("positive");
    }

 //TASK_5---MAX AND MIN
 function findMinMax(){
        let num1 = parseInt(document.getElementById('num_1').value);
        let num2 = parseInt(document.getElementById('num_2').value);
        let num3 = parseInt(document.getElementById('num_3').value);
        let max = Math.max(num1, num2, num3);
        let min = Math.min(num1, num2, num3);
        document.getElementById('output_3').innerHTML = `Max number: ${max}, Min number: ${min}`;
      }

//TASK_6---EVEN OR ODD 
var nnumber = prompt("Enter number:");
if(nnumber%2===0){
        console.log("even");
 }else{
     console.log("odd");
 }

//TASK_7---VOWEL OR CONSTANT
function checkVowel() {
        let char = document.getElementById('charInput').value.toLowerCase();
        if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
            document.getElementById('output_4').innerHTML = 'Vowel';
        } else {
            document.getElementById('output_4').innerHTML = 'Consonant';
        }
      }
//TASK_8---1-->NUM
var nummber = prompt("Enter a number :");
 for (var i = 0; i < nummber; i++) {
     console.log(i + " ")
 }
//TASK_9---MULTIPLICATION UP TO--> 12
var nnuumber= prompt("Enter a number :");
for(var i=1;i<13;i++){
        console.log(nnuumber*i)
}

//TASK_10---even between
function printEvenNumbers() {
        let number = parseInt(document.getElementById('evenNumberInput').value);
        let output = [];
        for (let i = 1; i <= number; i++) {
            if (i % 2 === 0) {
                output.push(i);
            }
        }
        document.getElementById('output_5').innerHTML = output.join(' ');
      }
//TASK_11---power
function calcPower() {
        let base = parseInt(document.getElementById('baseInput').value);
        let exponent = parseInt(document.getElementById('exponentInput').value);
        let result = Math.pow(base, exponent);
        document.getElementById('output_6').innerHTML = `${base}^${exponent} = ${result}`;
      }
//TASK_12---Calc total, average, and percentage 
//TASK_13--- Calc days in a month
function calculateDaysInMonth() {
        let month = parseInt(document.getElementById('monthInput').value);
        let days;
      
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                days = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                days = 30;
                break;
            case 2:
                days = 28; 
                break;
            default:
                days = 'Invalid';
        }
        document.getElementById('output_8').innerHTML = `Number of days in month ${month}: ${days}`;
}
//TASK_14---
 var Physics = prompt("Enter marks for Physics:");
 var Chemistry = prompt("Enter marks for Chemistry:");
 var Biology = prompt("Enter marks for Biology:");
 var Mathematics = prompt("Enter marks for Mathematics:");
 var Computer = prompt("Enter marks for Computer:");
 var total= Physics+Chemistry+Biology+Mathematics+Computer;
 var Percentage=(total/500)*100
 console.log(Percentage+"%");

 //TASK_15---
 var choice = prompt("Enter a choice")
 switch(choice){
        case 1: calculateDaysInMonth();
        break;
        case 2:checkVowel();
        break;
        case 3:  
        var number_1 = prompt("Enter  1st number:");
        var number_2 = prompt("Enter  2nd number:");
        if(number_1>number_2){
            console.log(number_1);
        }else if(number_1<number_2){
            console.log(number_2);
        }else{
            console.log(" Equal to each other");
        } 
        break;
            case 4:
                var nnumber = prompt("Enter number:");
                if(nnumber%2===0){
                        console.log("even");
                 }else{
                     console.log("odd");
                 }
          break;
          case 5:
                let number=prompt("Enter number:");
          if(number<0){
                 console.log("nagative");
             }else{
                 console.log("positive");
             }
             break;
            case 6: let num1 = prompt("Enter the first number: ");
               let num2 = prompt("Enter the second number: ");
               let operator = prompt("Enter an operator (+, -, *, /): ");
            
               let result;
        
               if (operator === "+") {
                   result = num1 + num2;
               } else if (operator === "-") {
                   result = num1 - num2;
               } else if (operator === "*") {
                   result = num1 * num2;
               } else if (operator === "/") {
                   if (num2 !== 0) {
                       result = num1 / num2;
                   } else {
                       alert("Division by zero is not allowed.");
                   }
               } else {
                   alert("Invalid operator. Please use +, -, *, or /.");
               }
        
               if (result !== undefined) {
                   console.log("Result of " + num1 + "" + operator + " " + num2 + " = " + result);
               }
                break;
            default:
                output = 'Invalid case number';
        
        }
// Task 16
        for(var i=1;i<11;i++){
                     console.log( i +" ")
                 }
// Task 17
var sum=0;
 for(var i=1;i<=10;i++){
    sum=i+sum;
 }
 console.log(sum);
 // Task 18
 for(var i=1;i<=20;i++){
     if(i%2==0){
         console.log(i+ " ");
     }
 }

 // Task 19
 var numberr=promppt("Enter a number:");
 factorial=1;
 for(var i=1;i<=number;i++){
     factorial=i*factorial;
 }
 // Task 20
 var str=prompt("enter a string:");
 var reversedStr = "";
 for (var i = str.length - 1; i >= 0; i--) {
     reversedStr += str[i];
 }
// Task 21
var array = [1,2,3,4,5];
 for (var i = 0; i < 5; i++) {
   console.log(array[i]);
 }
// Task 22
var arry=[1,2,3,4];
let maxNumb = arry[0];
for (let i = 1; i < arry.length; i++) {
    if (arr[i] > maxNumb) {
        maxNumb = arr[i];
    }
}
// Task 23
// Task 24
var str=prompt("enter a string:");
var count=0;
for(var i=0;i<str.length;i++){
        if(str[i]=="a"||str[i]=="u"||str[i]=="e"||str[i]=="i"||str[i]=="o"){
    count++;}
}
// Task 25
var numbber = prompt("Enter a prime number:");
for(var i=2;i<number;i++){
    if(number%i==0){
        console.log("Not a prime")
    }else{
        console.log("Is a prime")
    }
}