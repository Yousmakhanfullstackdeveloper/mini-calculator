let num1 = parseInt(prompt("Enter first number"));
let num2 = parseInt(prompt("Enter second number"));
let operators = prompt("Enter an operator (+, -, *, /)")
if(isNaN(num1) || isNaN(num2)){
    alert("Error: both input must be a data or complete your data")

}else if(operators=="+"){
    alert( `${num1} ${operators} ${num2} =${num1+num2}`);
}else if(operators=="-" && num2 > num1){
    alert(num1 + " first number is less than " + num2 + " Oops Enter the right digit ")
}

else if(operators=="-"){
    alert( `${num1} ${operators} ${num2} =${num1-num2}`);
}

else if(operators=="*"){
    alert( `${num1} ${operators} ${num2} =${num1*num2}`);
}
else if(operators=="/"){
    alert( `${num1} ${operators} ${num2} =${num1/num2}`);
}
else if(operators!= "+, _, *, /"){
    alert("please select only given operators")
}
else if(operators==""){
    alert("its blank please input your selective operators")
}
