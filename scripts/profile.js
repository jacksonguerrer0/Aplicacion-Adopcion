const guardar = document.getElementById("guardar")


export default class profile{
    guardarPerfil(){
        console.log(nombre)
        let arr = []
        guardar.addEventListener("click", e => {
            const nombre = document.getElementById("nombre").value;
            const apellido = document.getElementById("apellido").value;
            const correo = document.getElementById("correo").value;   
            let persona = {
                nombre: nombre,
                apellido: apellido,
                correo: correo
            }
            if(persona.nombre === "" && persona.apellido === "" && persona.correo === ""){
               alert("Por favor termina el formulario")
            }else{
                arr.push(persona)
                localStorage.setItem("Persona", JSON.stringify(arr))
                alert(`Bienvenido ${persona.nombre}, es momento de encontrar un pequeño amigo`)
                setTimeout("window.location.href='./message.html'", 1000);
            }

        })
    }
}