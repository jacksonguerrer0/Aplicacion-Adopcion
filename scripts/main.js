import Category from "./category.js"

//llamo a la clase category
const category = new Category;

const divCategoria = document.querySelector('#categoria');


//Pagina de espera
const URL = window.location.pathname;
console.log(URL)
if(URL === '/index.html') {
    setTimeout("window.location.href='./waiting-1.html'", 5000);
};

//Mostrar categoria Div Perro y Gato
category.showCategory();


//al hacer click en divCategoria
divCategoria.addEventListener("click", e =>{
    let idCategoria = category.clickCategoria(e);
    let showPets = category.consultaId(idCategoria);

})
