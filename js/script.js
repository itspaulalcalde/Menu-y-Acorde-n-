// 1)Seleccionamos todos los botones del acordeon 


// Menu responsive 
$(".menu-btn").on("click", function() {
    $(".menu").slideToggle();
    $(this).toggleClass("abierto");
})


// Acordeón
// Aquí van 6 elementos
$(".acordeon__titulo").on("click", function() {


    var contenido = $(this).next();

    // Despliega y oculta 
    contenido.slideToggle();

    $(this).toggleClass("abierto");


})