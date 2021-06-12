const perro = document.querySelector('#perro'); 
const gato = document.querySelector('#gato');
const divCategoria = document.querySelector('#categoria');
const pets = document.querySelector('#pets')
export default class Category{
    showCategory(){
    const Url = 'https://my-json-server.typicode.com/hispanos/db-adopcion/categories'
    fetch(Url)
    .then(response => response.json())
    .then(data => {
    data.forEach(elemento => {
        divCategoria.innerHTML += 
        `<div id="${elemento.id}" class="perro">
            <img class="circle" src="./img/${elemento.image}" alt="">
            <p>${elemento.name}</p>
        </div>
        `
    });

    })
    .catch(error => console.log(error))
    }
    clickCategoria(e){
        let idCategoria = ""; 

            if(e.target.classList[0] === "perro" ){
                idCategoria = e.target.id;
            }else if(e.target.parentElement.classList[0] === "perro"){
                idCategoria = e.target.parentElement.id;
            }
        
        return idCategoria;
    }
    consultaId(id){
        let Url = "https://my-json-server.typicode.com/hispanos/db-adopcion/pets";
        fetch(Url)
        .then(response => response.json())
        .then(data => {
            let dataFilter =  data.filter((elemento)=>elemento.categoryId === id);
            this.pintarPets(dataFilter)
        })
    }
    pintarPets(data){
        console.log(data)
        data.forEach(element => {
            pets.innerHTML += `
            <p>Nombres ${element.name}</p>
            <p>Raza ${element.race}</p>` 
        });
    }
}


