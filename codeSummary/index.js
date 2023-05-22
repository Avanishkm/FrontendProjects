// ES6
// Rest & Spread Operator

// Example Rest

function addNumber(a,b,c,...other){
    console.log(other)
    return a+b+c;
}
// const res = addNumber(1,2,3,4,5,6,7,8);
// console.log(res);


// // spread
// var names = ["Ajay", "Avanish", "Akash","Atul"];

// function getNames(name1, name2, name3,name4){
//     console.log(name1, name2, name3,name4);

// }
// // getNames(names[0], names[1], names[2]);

// getNames(...names);
// // getNames(names);


// // object ke sath -> rest

// var students = {
//     name:"Avanish",
//     age:"25",
//     hobbies:["Cricket", "Chess"]
// }
// // const age = students.age;
// const {...rest} = students;
// console.log(rest);

// // Spread
// var newStudents = {
//     ...students,
//     age:"29"
// }
// console.log(newStudents)

//-----------------------------------------------------
// Async JS Programming
// callbacks, Promises,Async & Await


const datas = [
    {name: "Avanish", Profession: "Software Engineer"},
    {name: "Akash", Profession: "Software Engineer"}
];

function getDatas(){
    setTimeout(()=>{
        let output = "";
        datas.forEach((data,index)=>{
            output += `<li> ${data.name}</li>`;
        })
        document.body.innerHTML = output;
    },1000);
}

// function createdata(newdata){
//     setTimeout(() => {
//         datas.push(newdata);
//     }, 2000);
// }

// getDatas();
// createdata({name:"aman", Profession: "Software Engineer"})

// for callback ==> if i am using callback function they can give the out put currectelly

// function createdata(newdata, callback){
//     setTimeout(() => {
//         datas.push(newdata);
//         callback();
//     }, 2000);
// }


// createdata({name:"aman", Profession: "Software Engineer"},getDatas)

// promise  

function createdata(newdata){
    return  new Promise((resolve, reject)=>{
        setTimeout(() => {
            datas.push(newdata);
            let error = false;
            if(!error){
                resolve();
            }else{
                reject("kuch shi nhi hai...");
            }
        }, 2000);

    })
    
}

// createdata({name:"aman", Profession: "Software Engineer"})
// .then(getDatas)
// .catch(err => console.log(err));

// Async & Await

// async function start(){
//   await createdata({name:"aman", Profession: "Software Engineer"})
//   getDatas();
// }
// start();


// Closure -> 

//1st example

// var sum = function(a){
//     console.log("Live Viewers " +a);
//     var c = 4;
//     return function(b){
//         return a+b+c;
//     }
    
// }
// var store = sum(200); // calling 
// console.log(store(5));


// example 2

var sum = function(a,b,c){
    
    return {
        getSumTwo:function(){
            return a+b;
        },
        getSumThree:function(){
            return a+b+c;
        }

    }
    
}
// var store = sum(3,4,5) // calling 
// console.log(store.getSumTwo())
// console.log(store.getSumThree())

var store1 = sum(3,5,8) // calling 
console.log(store1.getSumTwo())
console.log(store1.getSumThree())



















