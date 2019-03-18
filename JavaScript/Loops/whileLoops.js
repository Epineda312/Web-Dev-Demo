//examples of a while loop

//string we're looping over:
var str = "hello";
//first character is at index 0
var count = 0;

while(count < str.length) {
    console.log(str[count]);
    count++;
}
//"h"
//"e"
//"l"
//"l"
//"o"

var num = 1;

while(num <= 10){
    console.log(num);
    num += 2;
}
//Output: 1,3,5,7,9


var num = 1
while(num <= 20) {
    if(num % 4 === 0){
        console.log(num);
    }
    num++;
}
//Output 4,8,12,16,20

var num = 100;

while(num < 150){
    console.log(num + 1);
    num--;
}
//output: infinite loop