/**
 * 
 * 
 * GET POST PUT PATCH DELETE
 */


// const URL="http://localhost:8000/data"
// let options={
//     "method":"POST",
//     "headers":{
//         "Content-type":"application/json"
//     },
//     "body":JSON.stringify(
//         {
//        "id":"4",
//        "name":"dinesh",
//        "age":27
//     }
//     )
// }

// fetch(URL,options)
// .then(res=>{
//     if(res.ok){
//         console.log(res.statusText,res.status)
//     }
// })
// .catch(res=>console.log(res))



// const URL="http://localhost:8000/data"
// let options={
//     "method":"POST",
//     "headers":{
//         "Content-Type":"application/json"
//     },
//     "body":JSON.stringify(
//         {
//             "id":"5",
//             "name":"Monkey",
//             "age":43
//         }
//     )
// }

// fetch(URL,options)
// .then(res=>{
//   if(res.ok){
//     console.log(res.status,res.statusText)
//   }
// }).catch(res=>console.log(res))


const URL = "http://localhost:8000/data/4"
let options = {
    "method": "PATCH",
    "headers": {
        "Content-Type": "application/json"
    },
    "body": JSON.stringify({
        "name": "SAI"
    })
}

fetch(URL, options)
    .then(res => {
        if (res.ok) {
            console.log(res.status, res.statusText)
        }
    })