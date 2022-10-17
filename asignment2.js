/*1.five subject marks input:marks should be 0 to 100
total find and percentage,reappear,33above passed,merit>60%,fail
2. find odd even between 400 and 500
3.vowel and consonent check from 2 different methods 
4.four no. largest check
5.leap year*/




// 1. five subject marks
/*const pk = require("readline-sync")
var maths = pk.questionInt("enter your marks in maths\n")
if  (maths<0 || maths>100)
{
    console.log('enter valid no.')

}
else 
{ 
   
}
    var chemistry = pk.questionInt("enter your marks in chemistry\n")
    if  (chemistry<0 || chemistry>100)
    {
    console.log('enter valid no.')
}
else 
{

}
    var physics = pk.questionInt("enter your marks in physics\n")
    if  (physics<0 || physics>100)
    {
        console.log('enter valid no.')
    }
    else 
    {
    
    }
    
    var english = pk.questionInt("enter your marks in english\n")
    if  (english<0 || english>100)
    {
        console.log('enter valid no.')
    }
    else 
    {
    
    }
    var computer = pk.questionInt("enter your marks in computer\n") 
    if  (english<0 || english>100)
    {
        console.log('enter valid no.')
    }
    else 
    {
    
    }
 var per =(maths+physics+chemistry+english+computer)/5
 console.log(`your total percentage is ${per}%`)
 if(per<33)
 {
     console.log("you are failed")
 }
 else if(per>33&& per<60)
 {
    console.log("you are passed")
 }
 else if(per>=60&&per<=100)
 {
    console.log("you are in merit")

 }
 if(maths<33)
 {
   console.log("you are failed in maths\n or eneterd wrong marks")
 }
 else{

 }
 if(chemistry<33 || chemistry>100)
    {
      console.log("you are failed in chemistry \nor eneterd wrong marks")
    }
    else{

    }
    if(physics<33 || physics>100)
    {
      console.log("you are failed in physics \n or eneterd wrong marks ")
    }
    else{

    }
    if(english<33 || english>100)
    {
      console.log("you are failed in english \n or eneterd wrong marks")
    }
    else{

    }
    if(computer<33 ||computer>100)
    {
      console.log("you are failed in computer\nor eneterd wrong marks")
    }
    else{

    }*/
//2. find odd even between 400 and 500
/*const pk = require("readline-sync")
var num = pk.questionInt("enter no. btwn 400 and 500\n")
if (num > 400 && num < 500) {
  
  
}
else {
  console.log("wrong input")
}
if ((num/2)%2==0) {
  console.log("you enetered even no.")

}
else{
  console.log("you entered odd no.")
}*/




//3.vowels and consonents with two different methods

/*
const pk=require("readline-sync")
var alf=pk.question("enter any alphabet\n")
if(alf=='a' || alf=='e' || alf=='i' || alf=='0' || alf=='u')
{
  console.log("you entered a vowel")
}
else{
  console.log("you entered a consonent")
}*/



/*
const pk = require("readline-sync")
var alf = pk.question("enter any alphabet\n")
switch (alf) {
  case 'a':
    console.log(`${alf} is a vowel`)
    break
  case 'e':
    console.log(`${alf} is a vowel`)
    break
  case 'i':
    console.log(`${alf} is a vowel`)
    break
  case 'o':
    console.log(`${alf} is a vowel`)
    break
  case 'u':
    console.log(`${alf} is a vowel`)
    break
default:
  console.log(`${alf} is a consonent`)

  }*/




  //4.four no.enter check larges
  /*
  const pk=require("readline-sync")
  var a=pk.questionInt("enter first no.\n")
  var b=pk.questionInt("enter second no.\n")
  var c=pk.questionInt("enter third no.\n")
  var d=pk.questionInt("enter fourth no.\n")
   
  if(a>b&& a>c&&a>d)
  {
    console.log(`${a} is a greater no.`)
  }
  else if(b>a&& b>c&&b>d)
  {
    console.log(`${b} is a greater no.`)
  }
  else if(c>a&& b<c&&c>d)
  {
    console.log(`${c} is a greater no.`)
  }
  else if(d>a&& d>c&&b<d)
  {
    console.log(`${d} is a greater no.`)
  }
  else{
    console.log("please enter a valid no.")
  }*/
  

  //5.to check weather tyhe year is leap year
  /*const pk=require("readline-sync")
  var year=pk.questionInt("enter the year")
  if(year%4==0 || year%100==0)
  {
    console.log(`${year} is a leap year`)
  }
  else
  {
    console.log(`${year} is not a leap year`)
  }*/





