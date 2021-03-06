import Category from "./category.js"
import Detalle from "./detalle.js"
import Message from "./message.js"
import profile from "./profile.js"
//llamo a la clase category
const category = new Category;
const divCategoria = document.querySelector('#categoria');
const pets = document.querySelector('#pets')

//llamando a la clase detalle
const cDetalle = new Detalle;


//llamando a la clase Message
const message = new Message;

//llamando a profile
const profileP = new profile
//Pagina de espera
const URL = window.location.pathname;
console.log(URL)



if(URL === '/index.html') {
    setTimeout("window.location.href='./waiting-1.html'", 5000);
}



if(URL === "/category.html"){
    //Mostrar categoria Div Perro y Gato
    category.showCategory();
    category.showPets();


    //al hacer click en divCategoria
    divCategoria.addEventListener("click", e =>{
        let idCategoria = category.clickCategoria(e);
        let showPets = category.consultaId(idCategoria);
    })


    //al hacer click en cualquier card Pet
    pets.addEventListener("click", e =>{
        let idPet = category.idPets(e);
        window.location.href="../detalle.html?idPets="+ idPet;
    })

}



if(URL === "/detalle.html"){
    let detalle = ()=>{
        let parametro = new URLSearchParams(location.search)
        let idPet = parseInt(parametro.get("idPets"))
        let showIdPet = category.showIdPets(idPet)
    }
    detalle();

}
if(URL === "/favorite.html"){
    cDetalle.probando()
}
if(URL === "/message.html"){
    message.nombre()
}
if(URL === "/profile.html"){
    profileP.guardarPerfil()
}