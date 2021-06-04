'use strict';
const boton_foto = document.querySelector('#btn-subir');
const imagen = document.querySelector('#photo');

let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName :'dl82krs57',
    uploadPreset: 'preset_pabs'

}, (err, result)=>{
    if(!err && result && result.event === 'success'){
        //console.log('imagen subida con éxito', result.info);
        imagen.src = result.info.secure_url;
    }
});

boton_foto.addEventListener('click', () => {
    widget_cloudinary.open();
}, false);

// MODULO FORM CONTACTO - START
const cards = []; //Definir arreglo
const mostrarMensaje = ()=>{
    const contenedor = document.querySelector("#contenedor");
    const molde = document.querySelector(".molde-card"); 
    contenedor.innerHTML = "";     
    for(let i=0; i < cards.length; ++ i){
        let c = cards[i]; 
        let copia = molde.cloneNode(true);
        //copia.querySelector(".imagen-card").src = p.imagen;
        copia.querySelector(".titulo-card").innerText = c.titulo;        
        copia.querySelector(".descripcion-card").innerText = c.descripcion
        copia.querySelector(".imagen-card").src = c.foto_categoria
        contenedor.appendChild(copia);
    }
};

let limpiarForm = ()=>{
    document.querySelector("#titulo").value = "";
    document.querySelector("#descripcion").value = "";
    
    document.querySelector("#titulo").classList.remove("is-valid")
    document.querySelector("#descripcion").classList.remove("is-valid")
}

document.querySelector("#agregar").addEventListener('submit', (e)=>{

    e.preventDefault(); //Prevenir que el formulario recargue la página
    let titulo = document.querySelector("#titulo").value;
    let descripcion = document.querySelector("#descripcion").value;
    let foto_categoria = imagen.src;  
    let esValido = true;

    document.querySelector("#titulo").classList.remove("is-invalid")
    document.querySelector("#descripcion").classList.remove("is-invalid")

    if(titulo.trim() == ""){
        document.querySelector("#titulo").classList.add("is-invalid")
        esValido = false;
        
    }
    if(descripcion.trim() == ""){
        document.querySelector("#descripcion").classList.add("is-invalid")
        esValido = false;        
    }
      
    if(esValido){
        let card = {}; //Definir Objeto
        card.titulo = titulo;
        card.descripcion = descripcion;
        card.foto_categoria = foto_categoria;        
        console.log(document.querySelector("#photo").src = "imagen/galeria/placeholder.jpg");
        cards.push(card);
        mostrarMensaje();
        limpiarForm();
        Swal.fire("Categoría ingresada Correctamente.");
    }
});