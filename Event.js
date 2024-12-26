let btn1 = document.querySelector("#btn1");

// btn1.onclick=()=>{
//     console.log("Wlecome to btn1");
//     let a=24;
//     a++;
//    console.log(a);
// };


// Event Listeners

// btn1.addEventListener("click",()=>{
//     console.log("Wlecome to btn1");
//     let a=24;
//     a++;
//    console.log(a);
// });

let cm="light";

btn1.addEventListener("click",()=>{
    console.log("You are trying to change");
    if(cm=="light")
    {
        cm="dark";
        document.body.style.backgroundColor="black";
    }
    else{
        cm="light";
        document.body.style.backgroundColor="white";
    }
    console.log(cm);
});
console.log("1");
console.log("2");
console.log("3");
console.log("4");
setTimeout(()=>{    
   console.log("5 seconds are over");
},5000);
