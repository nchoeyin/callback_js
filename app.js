//1st way
// setTimeout(() => {
//     document.body.style.backgroundColor='red';
// },1000)

// setTimeout(() => {
//     document.body.style.backgroundColor='yellow';
// },2000)

// setTimeout(() => {
//     document.body.style.backgroundColor='violet';
// },3000)

// setTimeout(() => {
//     document.body.style.backgroundColor='blue';
// },4000)
//output : the page will turn red after one second and then yellow, violet, blue

//2nd way
// setTimeout(()=> {
//     document.body.style.backgroundColor='red';
//     setTimeout(() => {
//         document.body.style.backgroundColor='yellow';
//         setTimeout(()=> {
//             document.body.style.backgroundColor='violet';
//             setTimeout(()=> {
//                 document.body.style.backgroundColor='blue';
//             },1000)
//         },1000)
//     },1000)
// },1000)
//output : displays red color, yellow, violet,blue

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(()=> {
//         document.body.style.backgroundColor=newColor;
//         doNext && doNext();
//     },delay)
// }

// delayedColorChange('red',1000,()=> {
//     delayedColorChange('yellow',1000,()=> {
//         delayedColorChange('violet',1000,()=> {
//             delayedColorChange('blue',1000,()=> {
//             })
//         })
//     })
// })

// const fakeRequestCallback = (url,success,failure) =>{
//     const delay=Math.floor(Math.random()*4500)+500;
//     setTimeout(()=> {
//         if(delay>4000)
//             failure('connection Timeout :(')
//         else
//             success('here is your fake data from your url')
//         },delay)
// }

// fakeRequestCallback ('books.com', 
// function() {
//     console.log("IT WORKED!");
//    },
// function () {
//     console.log("ERROR!");
// } )
//output : IT WORKED!
//outpuut : ERROR!

const fakeRequestCallback = (url,success,failure) =>{
    const delay=Math.floor(Math.random()*4500)+500;
    setTimeout(()=> {
        if(delay>4000)
            failure('connection Timeout :(')
        else
            success('here is your fake data from your url')
        },delay)
}

fakeRequestCallback ('books.com', 
function(response) {
    console.log("IT WORKED!");
    console.log(response);
   },
function (err) {
    console.log("ERROR!");
    console.log(err);
} )

//output : IT WORKED!
//here is your fake data from your url

