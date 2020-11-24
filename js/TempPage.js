// -----biến Dashboard web-------

let premierepro = document.querySelector(".premiere-pro");
let afterEffect = document.querySelector(".after-effect");
let photoShop = document.querySelector(".photoshop");
let adobeIllutrator = document.querySelector(".adobe-illutrator");

// let dataConverted;
async function showTemp() {
  let data1 = await fetch("http://localhost:3000/Premiere");
  let data2 = await fetch("http://localhost:3000/PhotoShop");
  let data3 = await fetch("http://localhost:3000/AfterEffect");
  let data4 = await fetch("http://localhost:3000/AdobeIllutrator");

  let dataPremiere = await data1.json();
  let dataPhotoShop = await data2.json();
  let dataAfterEffect = await data3.json();
  let dataAdobeIllutrator = await data4.json();

  return [dataPremiere, dataPhotoShop, dataAfterEffect, dataAdobeIllutrator];
}

let idJson = localStorage.getItem("idDashBoard");
let idConverted = JSON.parse(idJson);
console.log(idConverted);

let select = document.querySelector(".select");

let component = document.querySelector(".component");

showTemp().then(function (ss) {
  console.log(ss[0]);

  component.innerHTML = "";
  let PremiereArray = ss[0].map(function (value, index) {
    return `<div class="component-child">
        <a href="../ContentPage/ContentPage.html" target= "_blank" >
            <img src="${value.img}" alt="Ảnh bài viết">
            <p id = ${value.id}>${value.content}</p>
        </a>
        </div>`;
  });
  let renderPremiere = PremiereArray.join("");
  component.innerHTML = renderPremiere;
});

select.onchange = function (event) {
  console.log(event.target.value);

  if (event.target.value == 0) {
    showTemp().then(function (ss) {
      console.log(ss[0]);
      component.innerHTML = "";

      let PremiereToRender = ss[0].map(function (value, index) {
        return `<div class="component-child">
                        <a href="../ContentPage/ContentPage.html" target= "_blank" >
                            <img src="${value.img}" alt="Ảnh bài viết">
                            <p>${value.content}</p>
                        </a>
                        </div>`;
      });
      let renderPremiere = PremiereToRender.join("");
      component.innerHTML = renderPremiere;
    });
  }

  if (event.target.value == 1) {
    showTemp().then(function (ss) {
      console.log(ss[0]);

      component.innerHTML = "";
      let PremiereArray = ss[0].filter(function (value, index) {
        return value.view == "100";
      });
      let PremiereToRender = PremiereArray.map(function (value, index) {
        return `<div class="component-child">
                        <a href="../ContentPage/ContentPage.html" target= "_blank" >
                            <img src="${value.img}" alt="Ảnh bài viết">
                            <p>${value.content}</p>
                        </a>
                        </div>`;
      });
      let renderPremiere = PremiereToRender.join("");
      component.innerHTML = renderPremiere;
    });
  }
  if (event.target.value == 2) {
    showTemp().then(function (ss) {
      console.log(ss[0]);
      component.innerHTML = "";
      let PremiereArray = ss[0].filter(function (value, index) {
        return value.like >= "100";
      });

      let PremiereToRender = PremiereArray.map(function (value, index) {
        return `<div class="component-child">
                        <a href="../ContentPage/ContentPage.html" target= "_blank" >
                            <img src="${value.img}" alt="Ảnh bài viết">
                            <p>${value.content}</p>
                        </a>
                        </div>`;
      });
      let renderPremiere = PremiereToRender.join("");
      component.innerHTML = renderPremiere;
    });
  }
};

component.onclick = function (e) {
  localStorage.setItem("idTempPage", JSON.stringify(e.target.id));
};
