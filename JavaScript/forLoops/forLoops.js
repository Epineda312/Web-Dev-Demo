//Printing numbers from 1-5 with a for loop
for(var count = 0; count < 6; count++) {
	console.log(count);
}

//Printing numbers from 1-5 with a while loop
var count = 1;

while(count < 6) {
	console.log("count is: " + count);
	count++;
}

//Printing each character in a string with a for loop
var str = "hello";

for(var i = 0; i < str.length; i++){
	console.log(str[i]);
}
//And with a while loop
var str = "hello";
var count = 0;

while(count < str.length){
	console.log(str[count]);
	count++;
}

//Excercise 1
for(var i = 0; i < 16; i+=8){
	console.log(i);
}
//Output: 0,8

//Excercise 2
var str = "ahceclwlxo";

for(var i = 1; i < str.length; i+=2){
	console.log(str[i]);
}
//Output: h e l o

//Problem set

//1.Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19");
var num = -10;
for (var i = -10; i <= 19; i++){
	console.log(num)
	num++;
}
//Solution
console.log("Print all numbers between -10 and 19");

for(var i = -10; i < 20; i++){
	console.log(i);
}

//2.Print all even numbers between 10 and 40
console.log("Print all even numbers between -10 and 40");
var num = -10;
for (var i = -10; i <= 40; i+=2){
	console.log(num)
	num+=2;
}
//Solution
console.log("Print all even numbers between -10 and 40");
for(var i = -10; i <= 40; i+=1){
	if(i % 2 === 0){
		console.log(i);
	}
}

//3.Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");
var num = 300;
for (var i = 300; i <= 333; i++){
	if(num % 2 !== 0){
	console.log(num)
	}
	num++;
}
//Solution
console.log("Print all odd numbers between 300 and 333");
for(var i = 300; i <= 333; i++){
	if(i % 2 !== 0){
		console.log(i);	
	}
}

//4.Print all numbers divisble by 5 AND 3 between 5 and 50
console.log("Print all numbers divisble by 5 AND 3 between 5 and 50");
var num = 5;
for (var i = 5; i <= 50; i++){
	if(num % 2 == 0 && num % 5 == 0){
	console.log(num)
	}
	num++;
}
//Solution
console.log("Print all numbers divisble by 5 AND 3 between 5 and 50");
for(var i = 5; i <= 50; i++){
	if(i % 5 === 0 && i % 3 === 0) {
		console.log(i);
	}
}