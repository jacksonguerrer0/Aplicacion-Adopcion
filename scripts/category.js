const divCategoria = document.querySelector('#categoria');
const pets = document.querySelector('#pets');



export default class Category{
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
        </div>
        `
    });
    })
    .catch(error => console.log("Error en la funcion showCategory" + error))
    }
    clickCategoria(e){
        let idCategoria = "";
        if(e.target.classList[0] === "divCategoria" )idCategoria = e.target.id;
        else if(e.target.parentElement.classList[0] === "divCategoria") idCategoria = e.target.parentElement.id;
        return idCategoria
    }
    consultaId(id){
        let Url = "https://my-json-server.typicode.com/hispanos/db-adopcion/pets";
        fetch(Url)
        .then(response => response.json())
        .then(data => {
            let dataFilterPerro =  data.filter((elemento)=>elemento.categoryId === "category-dogs");
            let dataFilterGato =  data.filter((elemento)=>elemento.categoryId === "category-cats");
            this.pintarPets(id, dataFilterPerro, dataFilterGato);
        })
    }

    pintarPets(id, dataPerro, dataGato){
        if(id === "category-dogs"){
            let perro = document.querySelector(".cardPerro");
                dataPerro.forEach(element => {
                    pets.innerHTML += 
                    `<div class="card cardPerro"  style="background-image: url(${element.image});">
                        <div class="cardGrad">
                            <p class="nombre">${element.name}</p>
                            <p class="race">${element.race}</p>
                        </div>
                    </div>`
                    if(element.categoryId === "category-dogs"){
                        perro.style.display = "";
                        console.log("es perro")
                    }else if (element.categoryId === "category-cats"){
                        console.log("es cat")
                    } 
                })

        }
        console.log(id, dataPerro, dataGato)
    }
            // dataPerro.forEach(element => {
               

            // });
        //     if (element.categoryId === "category-dogs") {
        //         pets.innerHTML += `
        //         <div class="card cardPerro"  style="background-image: url(${element.image});">
        //             <div class="cardGrad">
        //                 <p class="nombre">${element.name}</p>
        //                 <p class="race">${element.race}</p>
        //             </div>
        //         </div>`

        //     } 
        //     else if (element.categoryId === "category-cats") {
        //         return 
        //     }

  


    // `   pets.innerHTML += 
    //             <div class="card cardPerro"  style="background-image: url(${element.image});">
    //                 <div class="cardGrad">
    //                     <p class="nombre">${element.name}</p>
    //                     <p class="race">${element.race}</p>
    //                 </div>
    //             </div>`

    //             pets.innerHTML += 
    //             <div class="card" id="cardGato" style="background-image: url(${element.image});">
    //                 <div class="cardGrad">
    //                     <p class="nombre">${element.name}</p>
    //                     <p class="race">${element.race}</p>
    //                 </div>
    //             </div>`
}
