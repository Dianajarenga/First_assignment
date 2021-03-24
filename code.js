//printing a string!
console.log("hello world")
//variables and variable types!
var myNumber=3
console.log(myNumber)

//how to code array!
var myArrays=["3,4,5"];
console.log(myArrays)

//How to output objects!
var myObject={pet:"fluffy",age:3};
console.log(myObject)
//undefined is printed when the value of the type is not given
var myName;""
console.log(myName)
//Marking a variable as empty
var myAge=null;
console.log(myAge)
//arrays and addressing specific cells
var myArray=[1,2,3,4];
console.log(myArray[3])
var sameArray= (1,2,3);
console.log(sameArray)
var myArray=[];
 myArray[4]="hello";
 console.log (myArray)
 //Array elements ,storing different types together.
 var myArray=["diana",22,{}];
 var myBoolean=true;
 console.log(myArray ,myBoolean)
//manipulating Arrays
var myStack=[1,2,3];
myStack.push=(1);
myStack.push=(2);
myStack.push=(3);

console.log(myStack);
//Popping from end push and pop
console.log(myStack.pop());
console.log(myStack);
//ques using shifting and unshifting similar to push and pop

var myQueue = [];
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue.shift()); 

var myArray = [1,2,3];
myArray.unshift(0);
console.log(myArray);

//splicing arrays
var myArray = [0,1,2,3,4,5,6,7,8,9];
var splice = myArray.splice(3,5);

console.log(splice);        // will print out 3,4,5,6,7
console.log(myArray);       // will print out 0,1,2,8,9

//typeOf()
var a="hello world"
console.log(typeof(a))

//accessing properties
var person ={ name:"jane doe"


}; console.log(person.name)
var obj={
    a:"hello world",
    b:100,
   
}; 
var b="a";
   obj[b] ;//hello world
   obj["b"];//100
   console.log(obj["b"])
   //Functions are a main subtype of objects  with a typeof “function”. 
function foo() {
	return 21;
}
typeof foo;		// "function"
typeof foo();		// "number"

//They also can have properties, but this should be used in limited cases:
foo.bar = "hello world";
typeof foo.bar;	// "string"
var a=100
   var  b="100"
console.log(a!=
b)
console.log("far"<"bar")


