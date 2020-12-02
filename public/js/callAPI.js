async function showTemp() {
    let data1 = await fetch('https://blog-hung-duc.herokuapp.com/Premiere');
    let data2 = await fetch('https://blog-hung-duc.herokuapp.com/PhotoShop');
    let data3 = await fetch('https://blog-hung-duc.herokuapp.com/AfterEffect');
    let data4 = await fetch('https://blog-hung-duc.herokuapp.com/AdobeIllutrator');
    let data5 = await fetch('https://blog-hung-duc.herokuapp.com/commentUser');

    let dataPremiere = await data1.json();
    let dataPhotoShop = await data2.json();
    let dataAfterEffect = await data3.json();
    let dataAdobeIllutrator = await data4.json();
    let dataCommentUser = await data5.json();

    return [dataPremiere, dataPhotoShop, dataAfterEffect, dataAdobeIllutrator,dataCommentUser];
}