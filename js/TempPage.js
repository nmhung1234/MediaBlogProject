

let component = document.querySelector('.component');

// let mainWeb  = document.querySelector('#mainweb');
// let selectionid;
// console.log(hmmmm(mainWeb,selectionid))

showTemp().then(function(ss){
    console.log(ss[0]);

    component.innerHTML = "";
    let PremiereArray = ss[0].map(function(value, index) {
        return `<div class="component-child">
        <a href="../ContentPage/ContentPage.html" target= "_blank" >
            <img src="${value.img}" alt="Ảnh bài viết">
            <p>${value.content}</p>
        </a>
        </div>`
    } )
    let renderPremiere = PremiereArray.join("");
    component.innerHTML = renderPremiere; 
})

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
                        </div>`
            })
            let renderPremiere = PremiereToRender.join("");
            component.innerHTML = renderPremiere;
        })
    }

    if (event.target.value == 1) {
        showTemp().then(function (ss) {
            console.log(ss[0]);

            component.innerHTML = "";
            let PremiereArray = ss[0].filter(function (value, index) {
                return value.view == '100'
            })
            let PremiereToRender = PremiereArray.map(function (value, index) {
                return `<div class="component-child">
                        <a href="../ContentPage/ContentPage.html" target= "_blank" >
                            <img src="${value.img}" alt="Ảnh bài viết">
                            <p>${value.content}</p>
                        </a>
                        </div>`
            })
            let renderPremiere = PremiereToRender.join("");
            component.innerHTML = renderPremiere;
        })
    }
    if (event.target.value == 2) {
        showTemp().then(function (ss) {
            console.log(ss[0]);
            component.innerHTML = "";
            let PremiereArray = ss[0].filter(function (value, index) {
                return value.like >= '100'
            })

            let PremiereToRender = PremiereArray.map(function (value, index) {
                return `<div class="component-child">
                        <a href="../ContentPage/ContentPage.html" target= "_blank" >
                            <img src="${value.img}" alt="Ảnh bài viết">
                            <p>${value.content}</p>
                        </a>
                        </div>`
            })
            let renderPremiere = PremiereToRender.join("");
            component.innerHTML = renderPremiere;
        })
    }
}