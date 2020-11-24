// -----biến Dashboard web-------

let premierepro = document.querySelector('.premiere-pro');
let afterEffect = document.querySelector('.after-effect');
let photoShop = document.querySelector('.photoshop');
let adobeIllutrator = document.querySelector('.adobe-illutrator');

// let dataConverted;
async function showTemp(){
    let data1 = await fetch('http://localhost:3000/Premiere');
    let data2 = await fetch('http://localhost:3000/PhotoShop');
    let data3 = await fetch('http://localhost:3000/AfterEffect');
    let data4 = await fetch('http://localhost:3000/AdobeIllutrator');
    
    let dataPremiere = await data1.json();
    let dataPhotoShop = await data2.json();
    let dataAfterEffect = await data3.json();
    let dataAdobeIllutrator = await data4.json();
    
    return [dataPremiere, dataPhotoShop, dataAfterEffect, dataAdobeIllutrator];
}


let select = document.querySelector('.select');


let mainweb = document.getElementById("mainweb");


// let promise = new Promise(function(resolve, reject){
    
//     mainweb.onclick = function(e){
//         let selectionId;
//         selectionId = e.target.id;
//     }
//     resolve(selectionId)
// })

// promise.then(function(ss){
//     console.log(ss);
// })

