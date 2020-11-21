let mainweb = document.getElementById('mainweb');
let tbdata;
console.dir(mainweb.children[0]);

let a = mainweb.children[0].onclick = async function detail(){
    let data = await fetch(' http://localhost:3000/Premiere');
        let dataConvert = await data.json();
        console.log(dataConvert);
{
        
async function showpost(){
    if(a)
    {
    
    }
    if(tbdata == "aftereffect")
    {
        let data = await fetch(' http://localhost:3000/PhotoShop');
        let dataConvert = await data.json();
        console.log(dataConvert);
    
    }
    if(tbdata == "photoshop")
    {
        let data = await fetch(' http://localhost:3000/After Effect');
        let dataConvert = await data.json();
        console.log(dataConvert);
    
    }
    if(tbdata == "adobeillutrator")
    {
        let data = await fetch(' http://localhost:3000/Adobe Illutrator');
        let dataConvert = await data.json();
        console.log(dataConvert);
    
    }
   
}
showpost();

