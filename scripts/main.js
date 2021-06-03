const Carga = ()=>{
    let cargar = document.querySelector("#text-cargar").value;
    if(cargar = "Cargando..."){
        setTimeout("window.location.href='waiting-1.html'", 5000);
    }
    
}
Carga();