let mainweb = document.querySelector('#mainweb');

mainweb.onclick = function(e){
    localStorage.setItem("idDashBoard", JSON.stringify(e.target.id))
    
}