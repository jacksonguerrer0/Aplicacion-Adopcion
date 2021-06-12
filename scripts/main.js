import Category from "./category.js"

//llamo a categorias
const category = new Category;
const divCategoria = document.querySelector('#categoria');

const URL = window.location.pathname;
console.log(URL)
if(URL === '/index.html') {
    setTimeout("window.location.href='./waiting-1.html'", 5000);
};


category.showCategory();

divCategoria.addEventListener("click", e =>{
    let idCategoria = category.clickCategoria(e);

    let showPets = category.consultaId(idCategoria);

})
