let idJsonComponent = localStorage.getItem("idDashBoard");

let idComponentConverted = JSON.parse(idJsonComponent);
console.log(idComponentConverted);

let idJsonContent = localStorage.getItem("idTempPage");

let idContentConverted = JSON.parse(idJsonContent);
console.log(idContentConverted);

let author = document.querySelector(".author");
let titleOfContent = document.querySelector(".title-of-content");
let content = document.querySelector(".content-detail");
let image = document.querySelector(".left-side");
let views = document.querySelector(".views");
let date = document.querySelector(".date-public");

showTemp().then(function (ss) {
  let pauthor = `<p>${
    ss[idComponentConverted][idContentConverted - 1].author
  }</p>`;
  let ptitle = `<p>${
    ss[idComponentConverted][idContentConverted - 1].title
  }</p>`;
  let pcontent = `<p>${
    ss[idComponentConverted][idContentConverted - 1].content
  }</p>`;
  let pviews = `<i class="far fa-eye">&ensp;</i>${
    ss[idComponentConverted][idContentConverted - 1].view
  } views`;
  let pdate = `<i class="far fa-calendar-alt">&ensp;</i>${
    ss[idComponentConverted][idContentConverted - 1].date
  }`;
  image.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('${
    ss[idComponentConverted][idContentConverted - 1].img
  }')`;

  date.innerHTML = pdate;
  views.innerHTML = pviews;
  author.innerHTML = pauthor;
  titleOfContent.innerHTML = ptitle;
  content.innerHTML = pcontent;
});
