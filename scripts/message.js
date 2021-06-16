const content = document.querySelector(".content");
export default class Message{
    nombre(){
        let obteniendo = JSON.parse(localStorage.getItem("Favoritos"));
        obteniendo.forEach((element) => {
            content.innerHTML = `
            <div class="mHeader">
                <button onclick="location.href='category.html'" class="dDevolver"></button>
                <img class="dImgAutor" src="./img/autor.png" alt="">
                <h4>${element.autor}</h4>
            </div>
            <form class="mForm">
                <input type="text" class="mText">
            </form>`
        })

    }

}