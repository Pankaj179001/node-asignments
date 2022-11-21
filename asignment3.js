/*
1.factorial
2.print table of any no.
3.prime no. check yes or no
4.prime no.print[20]first
5.***
  **
  * 6.1/12/123
  7.1/22/333/4444
  8.54321/5432/543/54/5
  9.    *
       **
      ***
   10.****   
       ***   
        **   
         *
      */

   //1.factorial calculate
//    const pk=require("readline-sync")
//     var fact=1
//     n=pk.questionInt("enter the no. to calculate the factorial")
//          for(i=1;i<=n;i++)
//          fact=fact*i
//          {
//             console.log(`the factorial is ${fact}`)
//          }
/*const pk=require("readline-sync")
     var fact=1
     n=pk.questionInt("enter the no. to calculate the factorial")
     if(n<1){
        console.log("wrong input")
     }
     else{for(i=1;i<=n;i++)
                  fact=fact*i
                  {
                     console.log(`the factorial is ${fact}`)
                  }

     }*/
    // 2.print table of any no.
    /*const pk=require("readline-sync")
    var num 
    num=pk.questionInt("enter the no. to get the table")
     for(i=1;i<=10;i++){
        console.log(num,"*",i,"=",num*i)
     }*/   


     
     //3.prime no. check yes or no  
     /*const pk=require("readline-sync")
     var  num,s=0
     num=pk.questionInt("enter any no.\n")
     for(i=2;i<num;i++)
     {
        if(num%i==0 && num==1&&num==2){
         s=1
         break
            }
        }
      if(s==1){
         console.log(`${num} is not prime no.`)

      }
      else{
         console.log(`${num} is  prime no.`)

      }*/


//4.prime no.print[20]first

     
 /* var s,j,count=0
   for(i=2;;i++){
      for(j=2;j<i;j++){
         if(i%j==0){
            s=0
            break
         }
         else{
            s=1
         }
        
      } if(s==1){
         console.log(`${i}`)
         count++
      }
      if(count==20){
        break
      }
   }
*/
   //5.***
 //    **
 //    *
   /* var s,j
    for(i=3;i>0;i--){
      for(j=0;j<i;j++){
         process.stdout.write("*")


      }
      console.log(" ")
    }*/
    //6.1
    //12
    //123
    /*var i,j,count=0
    for(i=1;i<=4;i++){
      for(j=1;j<i;j++){
         count=count+1
         process.stdout.write(`${count}`)
         
      }
      console.log(" ")
      count=0

    }*/


    //7.1/22/333/4444
   /*var i,j,count=0
   for(i=0;i<5;i++)
   {
      for(j=0;j<i;j++){
         
    process.stdout.write(`${count}`)
      }
      console.log(" ")
      count=count+1
   }*/
  // 8.54321/5432/543/54/5
 /*var i,j,count=5
  for(i=5;i>0;i--){
   for(j=0;j<i;j++){
      process.stdout.write(`${count} `)
   count=count-1
 }
 console.log(` `)
 count=5
  }*/
//   9.    *
//        **
//       ***
/*{
var i,j
for(i=0;i<3;i++){
   for(j=0;j<3-i;j++)
   {
      process.stdout.write(" ")
   }
 for(j=0;j<i+1;j++){
   process.stdout.write("*")

 }   process.stdout.write("\n")
}
}*/
// 10.****   
//    ***   
//    **   
//    *
/*{let n=6
var i,j
 for(i=0;i<n;i++){
   for(j=0;j<n-i;j++){
      process.stdout.write("*")
   }
  console.log(" ")
 }
}*/

 //9.      *
//        **
//       ***
/*var i,j
for(i=0;i<3;i++)
{
   for(j=0;j<3-i;j++)
   { process.stdout.write(" ") }
    for(j=0;j<i+1;j++) {
      process.stdout.write("*")
   }
   console.log(" ")
}*/
//10.reverse pyramid
/*{let n=10
   for(let i=0;i<n;i++){
     for(let j=0;j<n-(i+1);j++){
      process.stdout.write(" ")
     }     
     for(let j=0;j<2*i+1;j++){
      process.stdout.write("*")

     }
           process.stdout.write("\n")


   }
   for(let i=n;i>0;i--){
      for(let j=0;j<n-i;j++){
       process.stdout.write(" ")
      }     
      for(let k=0;k<2*i-1;k++){
       process.stdout.write("*")
 
      }
           process.stdout.write("\n")
    }
   }*/
//11.print heart
/*
var i,j
for(i=0;i<2;i++)
{
   for(j=0;j<7;j++)
   { 
      if(i==0&&j==3){
      process.stdout.write(" *")
   }
   else if( i==0&&j==6){  
       process.stdout.write("   *")
           process.stdout.write("\n")
}


if(i==1&&j>=0&&j<3)
{
   process.stdout.write("*")
}
else if(i==1&&j>3&&j<=6){
   process.stdout.write("*")

} else if(i==1&&j==3){
   process.stdout.write(" ")

}

}
}
console.log("")

for( let i=4;i>0;i--){
   for(let j=0;j<4-i;j++){
    process.stdout.write(" ")
   }     
   for(let k=0;k<2*i-1;k++){
    process.stdout.write("*")

   }
           process.stdout.write("\n")
 }
*/