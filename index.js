// 1. way to print in java script
// console.log("hello world ");
// alert("me");
// document.write(" this is a doucument write ");


// 2. javascript console API
// console.log(" hello world " , 3+4, " another log");
// console.warn(" this is a warning ");
// console.error(" this is an error ");


// 3. javascript variables 
// number 
// var variable1 = 34;
// var variable2 = 43;
// var num2 = 34.567;

// String
// var a = ' this is a string';
// var b = "lakshay";
// var c = 'lakshay';

// object 
// var marks = {
//     ravi: 45,
//     lakshay: 78,
//     ankit:40
// }
// console.log(marks)

// boolean
// var num = true;
// console.log(num);

// undefined
// var und;
// console.log(und);

// var n = null;
// console.log(n);

// Array 
// var arr = [1,2,3,4,5,"lakshay"]
// console.log(arr);
// console.log(arr[2]);


// operation in javascript
// airthmetic operator
// var a =5;
// var b =3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

// assignment operator 
// var c =b;
// c +=2;
// console.log(c);


// comparision operator 
// var x=4;
// var y=7;
// console.log(x=y);
// console.log(x>y);
// console.log(x<y);

// logical operator
// console.log(true  && true)   // and operator
// console.log(true  || flase)  // or operator
// console.log(! true)  // not operator

// function 
// function avg(a,b){
//     return (a+b)/2;
// }
// a = avg(6,4)
// b = avg(16,14)
// console.log(a,b);


// conditionals 
// var a = 70;
// if(a<18){
//     console.log("you can not drive")
// }
// else if(a>18 && a<50){
//     console.log("you can drive")
// }
// else{
//     console.log("do not drive, because you are old")
// }


// loops

// 1. for loop
// var a = [1, 12, 22, 56, 76, 88, 98];
// for(var i =0; i<a.length;i++){
//     console.log(a[i]);
// }

// 2. for each loop
// a.forEach(function(element){
//     console.log(element)
// })

// 3. while loop
// var j = 0;
// while(j <a.length){
//     console.log(a[j]);
//     j++;
// }

// 4. do while loop
// do {
//   console.log(a[j]);
//   j++;
// }
// while (j < a.length)


// break and contuinue statement 
// var a = [1, 12, 22, 56, 76, 88, 98];
// for(var i =0; i<a.length;i++){
//   if(i=2){
//     // break;
//     // continue;
//   }
//     console.log(a[i]);
// }


// some methords in array
// let arr = ['hey','vit',25,null,true];
// console.log(arr.length);
// arr.pop();              // remove last element from array
// arr.push("lakshay");    // add a new element in array in last
//arr.shift();             // remove first element 
// arr.unshift('lakshay')  // add element to first position in an array
// console.log(arr);


// strings methord 
// let a = "lakshay is a good good boy";
// console.log(a.length);
// console.log(a.indexOf('good'))
// console.log(a.lastIndexOf('good'))
// console.log(a.slice(1,6))
// console.log(a.replace('lakshay','sandy'))


// date and time 
// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());


// DOM manipulation 
// let elm = document.getElementById('click');
// console.log(elm)
// let elmClass = document.getElementsByClassName('container');
// console.log(elmClass)
// elmClass[0].style.background = "yellow";
// elmClass[0].classList.add("bg-primary")
// elmClass[0].classList.add("text-success")
// elmClass[0].classList.remove("text-success")
// console.log(elm.innerHTML)
// console.log(elm.innerText)

// tn = document.getElementsByTagName('div');
// console.log(tn);

// createdElement = document.createElement('p');
// createdElement.innerText = " this is a created paragraph";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('b');
// createdElement2.innerText = " this is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);

// selecting using query
// sel = document.querySelector('.container');
// console.log(sel)
// sel = docuemnt.querySelector('.container')
// console.log(sel)


// events in java script 
// function clicked (){
//     console.log("the button was clicked")
// }
// window.onload = function(){
//     console.log('the document was loaded')
// }
// firstContainer.addEventListener('click' , function(){
//     console.log("clicked on container")
// })
// firstContainer.addEventListener('mouseover' , function(){
//     console.log("mouse over on the container")
// })
// firstContainer.addEventListener('mouseout' , function(){
//     console.log("mouse out on the container")
// })

// let prevHtml = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup' , function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHtml;
//     console.log("mouse up when clicked on the container")
// })

// firstContainer.addEventListener('mousedown' , function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
//     console.log("mouse out on the container")
// })


// arrow function 
// sum = (a,b) =>{
//     return a+b;
// }

// logkaro = () =>{
//     document.querySelectorAll('.container')[1].innerHTML = " <b> set interval fired </b>"
//     console.log("i am your log")
// }



// // setTimeout and setinterval 
// setTimeout(logkaro,2000);
// setInterval(logkaro,2000);
// use clearTimeout / clearInterval to cancel setInterval / setTimeout



// javaScript local storage 
// localStorage.setItem('name' , 'lakshay');
// localStorage;
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear()



// JSON
// obj = {name : "lakshay" , length :1, a:{this : "that"}}
// jso = JSON.stringify(obj)
// console.log(typeof jso)
// console.log( jso)
