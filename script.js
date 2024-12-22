// Function
    // let test=function(name)
    // {
    //     return `Hello ${name}`
    // }

    // let name="Mani";
    // let result=test(name)
    // console.log(result);



// Function types
    // function test1()
    // {
    //     console.log("Regular Function")
    // }
    // test1()

    // let test2=function()
    // {
    //     console.log("Anonoyms function") 
    // }
    // test2()

    // let test3=()=>{
    //     console.log("Arrow function")
    // }
    // test3()



// var ,let, -difference

    // var y=20;
    // if(true)
    // {
    //     var y=30;
    // }
    // console.log(y) //30

    // function vartest()
    // {
    //     console.log(x) // undefined
    //     var x=10;
    //     console.log(x) //10
    // }
    // vartest()

    // let y=20;
    // if(true)
    // {
    //     let y=30;
    // }
    // console.log(y) //20

    // function letTest()
    // {
    //     // console.log(x) // Error: Cannot access 'a' before initialization
    //     let x=10;
    //     console.log(x) // 10
    // }
    // letTest()


// Hoisting - Moving declaration at top scope
    // console.log(x)
    // var x="Mani"
    // console.log(x)

    // console.log(hoisting())
    // function hoisting()
    // {
    //     return "Mani"
    // }
    

// Objects and Methods

    // let user={
    //     name:"Mani",
    //     greet : function()
    //     {
    //         console.log(`Hello ${this.name}`)
    //     },
    //     greetArrow : ()=>
    //     {
    //         console.log(`Hello this is Arrow func ${this.name}`)
    //     }
    // };
    // user.greet()
    // user.greetArrow()



// Promise

    // const myPromise = ()=>{
    //     return new Promise((resolve,reject)=>{
    //     const x=1000;
    //     if(x==1000)
    //     {
    //         resolve("Promises Resolved")
    //     }
    //     else{
    //         reject("Promises Rejected")
    //     }
    // })
    // }
    // // myPromise
    // // .then((data)=>console.log(data))
    // // .catch((error)=>console.log(error))

    // const asyncCheck=async ()=>
    // {
    //     try{
    //         const data=await myPromise()
    //         console.log(data)
    //     }
    //     catch(error)
    //     {
    //         console.log(error)
    //     }
    // }
    // asyncCheck()


    
// API FETCH

    // const fetchData=async ()=>
    // {
    //     const url="https://jsonplaceholder.typicode.com/posts";

    //     try{
    //         console.log("Fetching Data")
    //         const response=await fetch(url);
    //         if(!response.ok)
    //         {
    //             throw new Error(`HTTP error ${response.status}`)
    //         }
    //         const json=await response.json();
    //         const idField=json.map((item)=>({
    //             id:item.id,
    //             title:item.title,
    //         }))
    //         console.log("Filtered Data",idField)
    //     }
    //     catch(error)
    //     {
    //         console.log(error)
    //     }
    // }
    // fetchData()
