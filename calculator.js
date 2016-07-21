//global variables
var input=["","",""];
var value=[];
var result=document.getElementById("output");

//arithmatic functions

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


//display functions

val clear=function(){
    input=["", "", ""];
    value=[];
    display();
}

var update=function(value){
    input.push(value);
    //shift() removes first element of the array;
    input.shift();
}


var display=function(){
    //innerHtml changes the value present in result to new value
    result.innerHTML=input.join(" ") + " " + value.join("");
}

//event listners 
