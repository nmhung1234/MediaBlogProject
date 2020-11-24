let mainWeb = document.getElementById("mainweb");
console.log(mainWeb);
mainWeb.onclick = function (e) {
  console.log(e.target.id);
  localStorage.setItem("idDashBoard", JSON.stringify(e.target.id));
};
