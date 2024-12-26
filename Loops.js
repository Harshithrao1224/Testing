for(let i=0;i<=5;i++)
{
    console.log("Welcome buddies");
}
let y=1;
while(y<=5)
{
    console.log("while loop");
    y++;
}
let w=20;
do{
   console.log("Do while loop");
   w++;
}while(w<=21)

for(let i=0;i<=100;i++)
{
        if(i%2==0)
        {
            console.log("num:",i);
        }
}
//2

let g=24;
let u= prompt("Guess the number");

while(u!=g)
{
   u=prompt(" You Enter the number worng guess again:");
}
if(u==g)
{
    console.log(" you got it");
}

const t= (a,b)=>{

    return a+b;
};

console.log(t(2,3));

const r=(a,b)=>{
    return a-b;
};
console.log(r(3,2));

const s=(a,b)=>{
    return a*b;
};
console.log(s(2,3));

const d=(a,b)=>{      
    return a/b;
};
console.log(d(4,2));

function myF(a,b,c) 
{
    return a+b+c;
    
}
console.log(myF(2,3,4));