/*1.
[{name:"pankaj",roll:[12,89,22,90],branch:"cse"}]
only even no. roll no. print
2.
[{name:"pankaj",roll:[12,34,33]}
,[12,44,{branch:[{cse:["datascience","mern"]}]}]]*/

//2.
{
    let arr=[{name:"pankaj",roll:[12,34,33]}
,[12,44,{branch:[{cse:["datascience","mern"]}]}]]
console.log(arr[1][2]["branch"][0]["cse"][0])
console.log(arr[1][2]["branch"][0]["cse"][1])
}

//  1.even no. print
 {
    let arr=[{name:"pankaj",roll:[12,89,22,90],branch:"cse"}]
    let a=arr[0]['roll'].filter((i)=>{
        if(i%2==0){
            return true
        }
    })
    console.log("even no. roll no. are :-\n",a)
 }
