//global variables
var a = 0,
b = 0,
i = 0,
next_operator = '';

//arithmatic functions
var add=function(a,b){
    return (+a + +b);
};

var subtract=function(a,b){
    return (+a - +b);
};

var multiply=function(a,b){
    return (+a * +b);
};

var divide=function(a,b){
    return (+a / +b);
};

var press_button = function(current_button){
  if (a.length != 0 && i == 0) {
    clear_display();
    display(current_button);
    i++;
  } else {
    i++;
    display(current_button);
  }
};

var display=function(number){
    var displayNum=document.getElementById("screen");
    if(i===1){
        displayNum.innerHTML="";
        displayNum.innerHTML=displayNum.innerHTML + number;
    } 
    else if(i > 10) {
        document.getElementById("screen").style.display = "none";
        setTimeout(function(){ 
        document.getElementById("screen").style.display = "block";
        }, 100);
        document.getElementById("screen").innerHTML = "Too long";
    }
    else{
        displayNum.innerHTML=displayNum.innerHTML + number;
    }
};

val clear_display = function(){
    document.getElementById("screen").innerHTML = "";
};


var reset = function(){
    document.getElementById("screen").innerHTML = "";
    a = 0;
    b = 0;
    i = 0;
    next_operator = 0;    
};

var get_number=function(){
    if(a===0){
        a=document.getElementById("screen").innerHTML;
    }
    else{
        b=document.getElementById("screen").innerHTML;
    }
};

var operator = function(sign) {
  if (sign === "equals") {
    get_result();
    a = 0;
    b = 0;
    i = 0;
  } 
  else if (sign === "negate") {
    var num = document.getElementById("screen").innerHTML;
    document.getElementById("screen").innerHTML = +num * -1;
  } 
  else {
    next_operator = sign;
    get_number();
    calculate_step();
    i = 0;
  }
};

var get_result = function() {
  get_number();
  if (next_operator === "add") {
    clear_display();
    i = (add(a, b)).length
    display(add(a, b));
  } 
  else if (next_operator === "subtract") {
    clear_display();
    i = (subtract(a, b)).length
    display(subtract(a, b));
  } 
  else if (next_operator === "multiply") {
    clear_display();
    i = (multiply(a, b)).length
    display(multiply(a, b));
  } 
  else if (next_operator === "divide") {
    clear_display();
    i = (divide(a, b)).length
    display(divide(a, b));
  }
};

var calculate_step = function() {
  if (a != 0 && b != 0) {
    get_result();
    a = document.getElementById("screen").innerHTML;
    b = 0;
    i = 0;
  }
};

document.onkeyup = function(e) {
  e = e || event
  if(!e.shiftKey){
    switch(e.keyCode){
      case 49:
        press_button(1);
        break;
      case 50:
        press_button(2);
        break;
      case 51:
        press_button(3);
        break;
      case 52:
        press_button(4);
        break;
      case 53:
        press_button(5);
        break;
      case 54:
        press_button(6);
        break;
      case 55:
        press_button(7);
        break;
      case 56:
        press_button(8);
        break;
      case 57:
        press_button(9);
        break;
      case 48:
        press_button(0);
        break;
      case 187:
        operator('equals');
        break;
      case 189:
        operator('subtract');
        break;
      case 88:
        operator('multiply');
        break;
      case 191:
        operator('divide');
      case 190:
        press_button('.');
        break;
      case 13:
        operator('equals');
        break;
      case 27:
        reset();
    }
  } else if(e.shiftKey) {
    switch(e.keyCode){
      case 187:
        operator('add');
        break;
      case 56:
        operator('multiply');
    }
  }
};