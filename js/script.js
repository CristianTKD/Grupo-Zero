const mensajes = []; //Definir arreglo
const mostrarMensaje = ()=>{
    let tbody = document.querySelector("#tbody-enviar");    
    tbody.innerHTML = "";   
    for(let i=0; i < mensajes.length; ++ i){
        let m = mensajes[i];        
        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        let tdCorreo = document.createElement("td");
        let tdAsunto = document.createElement("td");
        let tdMensaje = document.createElement("td");
        tdNombre.innerText = m.nombre;
        tdCorreo.innerText = m.correo;
        tdAsunto.innerText = m.asunto;
        tdMensaje.innerText = m.mensaje;
        tr.appendChild(tdNombre);
        tr.appendChild(tdCorreo);
        tr.appendChild(tdAsunto);
        tr.appendChild(tdMensaje);
        tbody.appendChild(tr);
    }
};

let cleanform = ()=>{
    document.querySelector("#nombre").value = "";
    document.querySelector("#correo").value = "";
    document.querySelector("#asunto").value = "";
    document.querySelector("#mensaje").value = "";
    document.querySelector("#nombre").classList.remove("is-valid")
    document.querySelector("#correo").classList.remove("is-valid")
    document.querySelector("#asunto").classList.remove("is-valid")
};

document.querySelector("#enviar").addEventListener('submit', (e)=>{
    e.preventDefault(); //Prevenir que el formulario recargue la página
    let nombre = document.querySelector("#nombre").value;
    let correo = document.querySelector("#correo").value;
    let asunto = document.querySelector("#asunto").value;
    let mensaje = document.querySelector("#mensaje").value;
    let validar = true;

    document.querySelector("#nombre").classList.remove("is-invalid")
    document.querySelector("#correo").classList.remove("is-invalid")
    document.querySelector("#asunto").classList.remove("is-invalid")
    document.querySelector("#mensaje").classList.remove("is-invalid")

    if(nombre.trim() == ""){
        document.querySelector("#nombre").classList.add("is-invalid")
        validar = false;
    }

   
    if(correo.trim() == ""){
        document.querySelector("#correo").classList.add("is-invalid")
        validar = false;
    }

    
    if(asunto.trim() == ""){
        document.querySelector("#asunto").classList.add("is-invalid")
        validar = false;
    }

    
    if(mensaje.trim() == ""){
        document.querySelector("#mensaje").classList.add("is-invalid")
        validar = false;
    }
    
    if(validar){
        let mensajegrupozero = {}; //Definir Objeto
        mensajegrupozero.nombre = nombre;
        mensajegrupozero.correo = correo;
        mensajegrupozero.asunto = asunto;
        mensajegrupozero.mensaje = mensaje;
        mensajes.push(mensajegrupozero);
        Swal.fire("Correo enviado Correctamente.");
        cleanform();
        mostrarMensaje();
    }
});