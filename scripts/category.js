const divCategoria = document.querySelector('#categoria');
const pets = document.querySelector('#pets');
const divDetalle = document.querySelector('.content')



export default class Category{
    //Mostrar en el div de categoria
    showCategory(){
    const Url = 'https://my-json-server.typicode.com/hispanos/db-adopcion/categories'
    fetch(Url)
    .then(response => response.json())
    .then(data => {
    data.forEach(elemento => {
        divCategoria.innerHTML += 
        `<div id="${elemento.id}" class="divCategoria">
            <img class="circle" src="./img/${elemento.image}" alt="">
            <p>${elemento.name}</p>
        </div>`
    });
    })
    .catch(error => console.log("Error en la funcion showCategory" + error))
    }
    //Muestra el id del div  donde se hace click
    clickCategoria(e){
        let idCategoria = "";
        if(e.target.classList[0] === "divCategoria" )idCategoria = e.target.id;
        if(e.target.parentElement.classList[0] === "divCategoria") idCategoria = e.target.parentElement.id;
        return idCategoria
    }
    //Filtra segun el id
    consultaId(id){
        let Url = "https://my-json-server.typicode.com/hispanos/db-adopcion/pets";
        fetch(Url)
        .then(response => response.json())
        .then(data => {
            let dataFilter =  data.filter((elemento)=>elemento.categoryId === id);
            this.pintarPets(id, dataFilter);
        })
    }
    //Mostrar siempre en inicio
    showPets(){
        pets.innerHTML=""
        let Url = "https://my-json-server.typicode.com/hispanos/db-adopcion/pets";
        fetch(Url)
        .then(response => response.json())
        .then(data => {
            let style = ''
            let dataFilter =  data.filter((elemento)=>elemento.categoryId === "category-dogs");
            dataFilter.forEach(element => {
                (element.id % 2 === 0)? style ='cardPar': style='cardImpar';
                pets.innerHTML += 
                `<div class="card ${style}" id="${element.id}" style="background-image: url(${element.image});">
                    <div class="cardGrad">
                        <p class="nombre">${element.name}</p>
                        <p class="race">${element.race}</p>
                    </div>
                </div>`
            })
        })
    }
    //Pintar segun el id
    pintarPets(id, dataFilter){
        console.log(id, dataFilter)

        if(id === "category-dogs"){ 
            pets.innerHTML=""
            let style = ''
                dataFilter.forEach((element) => {
                    (element.id % 2 === 0)? style ='cardPar': style='cardImpar';
                    pets.innerHTML += 
                    `<div class="card ${style}" id="${element.id}" style="background-image: url(${element.image});">
                        <div class="cardGrad">
                            <p class="nombre">${element.name}</p>
                            <p class="race">${element.race}</p>
                        </div>
                    </div>`
                })
        }else if (id === "category-cats") {
            pets.innerHTML = ""
            let style = ''
                dataFilter.forEach(element => {
                    (element.id % 2 === 0)? style ='cardPar': style='cardImpar';
                    pets.innerHTML += 
                    `<div class="card ${style}" id="${element.id}"  style="background-image: url(${element.image});">
                        <div class="cardGrad">
                            <p class="nombre">${element.name}</p>
                            <p class="race">${element.race}</p>
                        </div>
                    </div>`
                })
        }
    }
    //Obtener el id de la tarjeta
    idPets(e){
        let idPet = "";
        if(e.target.classList[0] === "card" )idPet = e.target.id;
        else if(e.target.parentElement.classList[0] === "card") idPet = e.target.parentElement.id;
        else if (e.target.parentElement.parentElement.classList[0] === "card") idPet =  e.target.parentElement.parentElement.id;
        return idPet
    }
    //Pinta el detalle de la mascota
    showIdPets(idPet){
        divDetalle.innerHTML=""
        let Url = "https://my-json-server.typicode.com/hispanos/db-adopcion/pets";
        fetch(Url)
        .then(response => response.json())
        .then(data => {
            let dataFilter =  data.filter((elemento)=>elemento.id === idPet);
            let genero = "";
            let agregarPersonalidad = ""
            dataFilter.forEach(element => {
                (element.gender === "Male")? genero = "masculino.png": genero = "femenino.png";
                (element.personality[2] === undefined)? agregarPersonalidad = "Juguetón" : agregarPersonalidad= element.personality[2];
                divDetalle.innerHTML += 
                `<div class="dFondo" style="background-image: url(${element.image});">
                <button onclick="location.href='category.html'" class="dDevolver"></button>
            </div>
            <div class="dDescription">
                <div class="dUno">
                    <h2>${element.name}</h2>
                    <img class="dImgGenero" src="./img/${genero}" alt="">
                    <div class="dFavorito"></div>
                </div>
                <div class="dDos">
                    <img src="./img/raza.png" alt="">
                    <p>${element.race}</p>
                </div>
                <div class="dDos">
                    <img src="./img/edad.png" alt="">
                    <p>${element.age}</p>
                </div>
                <div class="dTres">
                    <img src="./img/direccion.png" alt="">
                    <p>${element.address}</p>
                </div>
                <h3 class="dH3">Personalidad</h3>
                <div class="dCuatro">
                    <div class="dCuatroPersonalidad">
                        <img class="dCuatroImgPersonalidad" src="./img/${element.personality[0]}.png" alt="">
                        <p>${element.personality[0]}</p>
                    </div>
                    <div class="dCuatroPersonalidad">
                        <img class="dCuatroImgPersonalidad" src="./img/${element.personality[1]}.png" alt="">
                        <p>${element.personality[1]}</p>
                    </div>
                    <div class="dCuatroPersonalidad">
                        <img class="dCuatroImgPersonalidad" src="./img/${agregarPersonalidad}.png" alt="">
                        <p >${agregarPersonalidad}</p>
                    </div>
                </div>
                <h3 class="dH3">Historia</h3>
                <p>${element.feature}</p>
                <div class="dCinco">
                    <img class="dImgAutor" src="./img/autor.png" alt="">
                    <h4>${element.author.name}</h4>
                    <button onclick="location.href='message.html'" class="dContactar">Contactar</button>
                </div>
                                        
            </div>`

            })
            this.agregarFavorito(dataFilter)
        })
        
    }
    agregarFavorito(dataFilter){
        const dFavorito = document.querySelector(".dFavorito");
        let Favorito =  JSON.parse(localStorage.getItem("Favoritos"))
        console.log(!Favorito)
        if(!Favorito || Favorito.length < 1){ Favorito = []}
        dFavorito.addEventListener("click", e=>{
                dataFilter.forEach(element => {
                    let Mascota = {
                        imagen: element.image,
                        nombre: element.name,
                        raza: element.race,
                        autor: element.author.name
                    }
                    Favorito.push(Mascota);
                    console.log(Favorito);
                    this.agregarLocal(Favorito)  
                });       
            })
    }
    agregarLocal(Favorito){
        localStorage.setItem("Favoritos", JSON.stringify(Favorito));
    }   
}
