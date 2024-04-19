
document.addEventListener("DOMContentLoaded", function() {
    const imgPequeña = document.querySelector(".grid .img");
    const lightbox = document.querySelector(".lightbox");
    const imgGrande = document.querySelector(".lightbox .grande");
    const btnCerrar = document.getElementById("cerrar");

    // Función para abrir el lightbox
    function abrirLightbox() {
        console.log("Abriendo lightbox...");
        lightbox.classList.add("isActive");
        imgGrande.classList.add("mostrar"); // Agregar clase para iniciar la animación de mostrar
        imgGrande.classList.remove("ocultar"); // Asegurarnos de que la clase de ocultar se elimine si estaba presente
        imgGrande.classList.remove("reducir"); // Asegurarnos de que la clase de reducir se elimine si estaba presente
    }
    
    function cerrarLightbox() {
        console.log("Cerrando lightbox...");
        lightbox.classList.remove("isActive");
        imgGrande.classList.remove("mostrar"); // Eliminar clase para detener la animación de mostrar
        imgGrande.classList.add("ocultar"); // Agregar clase para iniciar la animación de ocultar
        imgGrande.classList.add("reducir"); // Agregar clase para iniciar la animación de reducir
    }

    // Mostrar imagen grande cuando se hace clic en la imagen pequeña
    imgPequeña.addEventListener("click", function() {
        abrirLightbox();
        imgGrande.src = this.src; // Establecer la misma imagen en el lightbox
    });

    // Cerrar el lightbox cuando se hace clic en el botón de cerrar
    btnCerrar.addEventListener("click", function() {
        cerrarLightbox();
    });

    // Cerrar el lightbox cuando se hace clic fuera de la imagen grande
    
});