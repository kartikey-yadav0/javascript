function sayHello(){alert("Hello world")}
document.write("This is my first java script page");
var pi=3.14;
var person="are you god";
var answer="yes i am!";
document.write(pi+ "<br>");
document.write(person+ "<br>");
document.write(answer+ "<br>");

function myFunction()
{
    var carname="welcome";
    document.getElementById("demo").innerHTML=carname;
}
var num=10;
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
num=harshit;
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num));
num=undefined;
console.log(num);
console.log(typeof(num));

var person={
    firstName:"harshit",
    lastName:"verma",
    id:5566,
    getinfo:function(){
        return this.firstName + "" +this.lastName
    }
}
document.getElementByid("demo").innerHTML=person.getinfo();

var person={
    name:'ramesh',
    age:30,
    isMarried:true,
    address:{
        street:'vinay nagar',
        flatno:201
    }
};
console.log(person);

console.log(person['name']);
document.write(person['name'])

document.write("<br>");
console.log(person.name);
document.write(person.name);
 
function myFunction(){
    var carName="volvo";
    document.getElementById("demo1").innerHTML=typeofcarName +"" +carName;

}
myFunction();
document.getElementById("demo2").innerHTML=typeof carName;

var locates={
    europe:function(){
        var myFriend="harshit";
        var france=function(){
            var paris=function(){
                console.log(myFriend);
            };
            paris();
        };
        france();
    }
};
locates.europe();

function show(){
    var a="hii hello byee";
    document.write(a+"<br>");
    function disk(){
        var b="namaste jai shrree ram";
        document.write(b+"<br>");
    }
    disk();
}
show();
var myVar="global";
function check(){
    var myVar="local";
    document.write(myVar);
}
var name="harshit";
function first(){
    var a= "hello";
    second();
    var x= a + name ;
    console.log(a)

}

function second(){
    var b="verma";
    third();
    var z =b+ name;
    console.log(b)
}
function third(){
    var c ="hii";
     var z=c+name;
     console.log(c)
}
first();

var age= 20;
if(age>18){
    document.write("<b> You are elgible to cast the vote</b>");
    
}
