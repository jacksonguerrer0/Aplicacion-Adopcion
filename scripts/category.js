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
            let dataFilter =  data.filter((elemento)=>elemento.categoryId === "category-dogs");
            dataFilter.forEach(element => {
                pets.innerHTML += 
                `<div class="card" id="${element.id}" style="background-image: url(${element.image});">
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
                dataFilter.forEach(element => {
                    pets.innerHTML += 
                    `<div class="card" id="${element.id}" style="background-image: url(${element.image});">
                        <div class="cardGrad">
                            <p class="nombre">${element.name}</p>
                            <p class="race">${element.race}</p>
                        </div>
                    </div>`
                })
        }else if (id === "category-cats") {
            pets.innerHTML = ""
                dataFilter.forEach(element => {
                    pets.innerHTML += 
                    `<div class="card" id="${element.id}"  style="background-image: url(${element.image});">
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
        if(e.target.className === "card" )idPet = e.target.id;
        else if(e.target.parentElement.className === "card") idPet = e.target.parentElement.id;
        else if (e.target.parentElement.parentElement.className === "card") idPet =  e.target.parentElement.parentElement.id;
        return idPet
    }
    //Pinta el detalle de la mascota
    showIdPets(idPet){
        console.log(idPet)
        divDetalle.innerHTML=""
        let Url = "https://my-json-server.typicode.com/hispanos/db-adopcion/pets";
        fetch(Url)
        .then(response => response.json())
        .then(data => {
            let dataFilter =  data.filter((elemento)=>elemento.id === idPet);
            console.log(dataFilter)
            dataFilter.forEach(element => {
                divDetalle.innerHTML += 
                `<div class="card" id="${element.id}" style="background-image: url(${element.image});">
                    <div class="cardGrad">
                        <p class="nombre">${element.name}</p>
                        <p class="race">${element.race}</p>
                    </div>
                </div>`
            })
        })
    }
}
