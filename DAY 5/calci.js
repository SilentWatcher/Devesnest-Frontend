window.onload=function calculate(){

  function Addition() {
    let num1 = Number(document.querySelector(".num1").value);
    let num2 = Number(document.querySelector(".num2").value);
    
    let answer = document.querySelector(".result-value");
    answer.innerHTML = num1 + num2;
    console.log("Added");
    
  }
  function Substraction() {
    let num1 = Number(document.querySelector(".num1").value);
    let num2 = Number(document.querySelector(".num2").value);
    
    let answer = document.querySelector(".result-value");
    answer.innerHTML = num1 + num2;
    console.log("subtracted");
    
  }
  function Multiplication() {
    let num1 = Number(document.querySelector(".num1").value);
    let num2 = Number(document.querySelector(".num2").value);
    
    let answer = document.querySelector(".result-value");
    answer.innerHTML = num1 + num2;
    console.log("multiplyed");
    
  }
  function Division() {
    let num1 = Number(document.querySelector(".num1").value);
    let num2 = Number(document.querySelector(".num2").value);
    
    let answer = document.querySelector(".result-value");
    answer.innerHTML = num1 + num2;
    console.log("divided");
    
  }


  document.querySelector(".submit-add").addEventListener("click", Addition);
  document.querySelector(".submit-min").addEventListener("click", Substraction);
  document.querySelector(".submit-mul").addEventListener("click", Multiplication);
  document.querySelector(".submit-div").addEventListener("click", Division);

}