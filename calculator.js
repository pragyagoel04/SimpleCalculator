//global variables
var a=0;
var b=0;
var i=0;
//arithmatic functions
"pragya"
var add=function(a,b){
    return a + b;
}

var sub=function(a,b){
    return a - b;
}

var mul=function(a,b){
    return a * b;
}

var div=function(a,b){
    return a / b;
}

var mod=function(a,b){
    return a % b;
}

var equals=function(){
    if(input[1]=="+"){
        clear();
        value.push(add(parseFloat(input[0]), parseFloat(input[2])));
    }
    else if(input[1]=="-"){
        clear();
        value.push(sub(parseFloat(input[0]), parseFloat(input[2])));
    }
    else if(input[1]=="*"){
        clear();
        value.push(mul(parseFloat(input[0]), parseFloat(input[2])));
    }
    else if(input[1]=="/"){
        clear();
        value.push(div(parseFloat(input[0]), parseFloat(input[2])));
    }
    else if(input[1]=="%"){
        clear();
        value.push(mod(parseFloat(input[0]), parseFloat(input[2])));
    }

    display();
}

var press_button = function(current_button){
  if (a.length != 0 && i == 0) {
    clear();
    display(current_button);
    i++;
  } else {
    i++;
    display(current_button);
  }
}

var get_number=function{
    if(a==0)
        a=document.getElementById("screen").innerHTML;
    else{
        b=document.getElementById("screen").innerHTML;
    }
}


//display functions

val clear=function(){
    document.getElementById("screen").innerHTML="";
}

var update=function(value){
    input.push(value);
    //shift() removes first element of the array;
    input.shift();
}


var display=function(number){
    var displayNum=document.getElementById("screen");
    if(i==1){
        displayNum.innerHTML="";
        displayNum.innerHTML=displayNum.innerHTML + number;
    } 
    else{

    }
}
    //innerHtml changes the value present in result to new value
    result.innerHTML=input.join(" ") + " " + value.join("");
}

//event listners 
