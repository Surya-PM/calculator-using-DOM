
//---------CREATING DOM ELEMENTS------------>

let container=document.createElement('div')
container.setAttribute('class','container')
let box=document.createElement('div')
box.setAttribute('class','box')
container.append(box)
document.body.append(container)

//span and input
let span=document.createElement('span')
span.setAttribute('class','text-right')
span.setAttribute('id','span')
let p=document.createElement('p')
span.append(p)
box.append(span)
box.append(document.createElement('br'))

let input=document.createElement('input')
input.setAttribute('type','text')
input.setAttribute('id','input')
input.setAttribute('class','text-right form-control')
box.append(input)
box.append(document.createElement('br'))

  // assigning values and setattributes
function assignValues(elem,val,id_name,type){
    elem.setAttribute('value',val);
    elem.setAttribute('id',id_name);
    elem.setAttribute('type','button');
    if(type==="num")    elem.setAttribute('class','bg-dark text-light');
    else if(type==="op")  elem.setAttribute('class','bg-warning text-dark');
    elem.innerHTML=val;
    box.append(elem);
}
//box.append(document.createElement('br'))



// buttons

let seven = document.createElement('button')
assignValues(seven,"7","seven","num")
let eight = document.createElement('button')
assignValues(eight,"8","eight","num")
let nine = document.createElement('button')
assignValues(nine,"9","nine","num")
let add = document.createElement('button')
assignValues(add,"+","add","op")
box.append(document.createElement('br'))

let four = document.createElement('button')
assignValues(four,"4","four","num")
let five = document.createElement('button')
assignValues(five,"5","five","num")
let six = document.createElement('button')
assignValues(six,"6","six","num")
let sub = document.createElement('button')
assignValues(sub,"-","sub","op")
box.append(document.createElement('br'))

let one = document.createElement('button')
assignValues(one,"1","one","num")
let two = document.createElement('button')
assignValues(two,"2","two","num")
let three = document.createElement('button')
assignValues(three,"3","three","num")
let mul = document.createElement('button')
assignValues(mul,"*","mul","op")
box.append(document.createElement('br'))

let clear = document.createElement('button')
clear.innerHTML="C"
clear.setAttribute('type','button');
clear.setAttribute('id','clear');
clear.setAttribute('class','bg-danger text-light');
box.append(clear)
let zero = document.createElement('button')
assignValues(zero,"0","zero","num")
let equal = document.createElement('button')
equal.innerHTML="="
equal.setAttribute('type','button');
equal.setAttribute('id','equal');
equal.setAttribute('class','bg-success text-light');
box.append(equal)
let div = document.createElement('button')
assignValues(div,"/","div","op")



//-------------ADDING FUNCTIONALITIES--------->


box.addEventListener("click", print)
clear.addEventListener("click",reload)
equal.addEventListener("click",output)

function print(event){
    let span = document.querySelector("#span")
    if(event.target.value===undefined){
        span.innerHTML+=""
    }else{
        span.innerHTML+=event.target.value;
    }
    
}

function reload(){
    let span = document.querySelector("#span")
    let result = document.querySelector("#input")
    span.innerHTML=""
    result.value = ""
}


function output(){
    let span = document.querySelector("#span"); 
    let result = document.querySelector("#input")
    result.value = eval(span.innerText); 
}

// keypress
function keyboard_input(event){
    let span = document.querySelector("#span");
    if((event.key<10 && event.key>=0) || event.key==="*" || event.key==="-" || event.key==="+" || event.key==="/" ){
        span.innerText += event.key
    }else if(event.key==="Enter"){
        output()
    }
}
document.body.addEventListener("keypress",keyboard_input)


