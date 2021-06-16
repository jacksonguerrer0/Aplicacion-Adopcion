export default class detalle {
    probando(){
           let obteniendo = JSON.parse(localStorage.getItem("Favoritos"));
    
    pets.innerHTML=""
    let style = ''
    console.log(obteniendo)
        obteniendo.forEach((element) => {
            (element % 2 === 0)? style ='cardPar': style='cardImpar';
            pets.innerHTML += 
            `<div class="card ${style}" id="" style="background-image: url(${element.imagen});">
                <div class="cardGrad">
                    <p class="nombre">${element.nombre}</p>
                    <p class="race">${element.raza}</p>
                </div>
            </div>`
        })
    }
}