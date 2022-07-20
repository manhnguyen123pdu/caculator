// Addtion
function add() {
    let num1=document.querySelector('#num1').value;
    let num2=document.querySelector('#num2').value;
    let result= Number(num1) + Number(num2);
    document.querySelector('.result').innerHTML='Result Addtion:' + result;
}
// Subtraction
function sub() {
    let num1=document.querySelector('#num1').value;
    let num2=document.querySelector('#num2').value;
    let result= Number(num1) - Number(num2);
    document.querySelector('.result').innerHTML='Result Subtraction: ' + result;
}
// Multiplication
function mul() {
    let num1=document.querySelector('#num1').value;
    let num2=document.querySelector('#num2').value;
    let result= Number(num1) * Number(num2);
    document.querySelector('.result').innerHTML='Result Multiplication: ' + result;
}
// Divition
function div() {
    let num1=document.querySelector('#num1').value;
    let num2=document.querySelector('#num2').value;
    let result= Number(num1) / Number(num2);
    document.querySelector('.result').innerHTML='Result Divition: ' + result;
}