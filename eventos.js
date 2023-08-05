const div1 = document.querySelector("div");

function saludoDiv(event){
    if(event.target.tagName !=="BUTTON")
    /*Se utiliza event.target para acceder al elemento que dispara el evento, en este caso, el elemento sobre el que se hace clic. Con la propiedad tagName del elemento event.target se obtiene el nombre de la etiqueta HTML del elemento que dispara el evento.
    La condición if verifica si el elemento que dispara el evento no es un botón */
    alert("Hola! Soy el div");
}

div1.addEventListener("click", saludoDiv)