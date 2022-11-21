//1,repeating sum

/*const pk=require("readline-sync")
var a,b,d
function sum(){
a=pk.questionInt("enter first no.")
b=pk.questionInt("enter second no.")
    c=a+b
    console.log('the sum is '+c)
    repeat()
 }
 sum()
 function repeat(){
    d=pk.question("enter YES to try again \n enter NO to quit\n ")
 switch(d){
    case "yes":
        sum()
        break;
    case "no":
        break;
    default:
        break
    
 }}*/
 //2. first and last digit sum(eg. 134,,,sum is 1+4)
/*const pk=require("readline-sync")
 var first,sum,last
 a=pk.questionInt("enter any no.")
 last=a%10
 while(a>10){
    a=a/10
 }
  first=parseInt(a)
 sum=first+last
console.log(` sum of first and last digit of is ${sum}`)*/





//3. reverse no.(eg. 234 is 432)

/*const pk=require("readline-sync")
 var n,first,rev=0
 n=pk.questionInt("enter any no. ")
 while(n!=0)
 {
    first=n%10
    rev = (rev*10)+first
    n=n/10
 }
console.log(rev)*/