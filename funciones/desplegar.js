// Función para alternar la visibilidad del menú desplegable
function toggleMenu() {
    var dropdownMenu = document.getElementById("myDropdown");
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
}

// Cerrar el menú desplegable si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}


// Desplega los divs con la informacion de la empresa en empresa.html
function desplegarInfo(index){
    const secciones =   document.querySelectorAll('.seccion');
    const flechas = document.querySelectorAll('.flecha');
    const infoContents = document.querySelectorAll('.info-content');

    secciones.forEach((seccion, i) =>{
        const infoContent = infoContents[i];
        const flecha = flechas[i];

        if(i === index){
            const abierto = infoContent.style.maxHeight !== '0px'

            if(abierto){
                infoContent.style.maxHeight = '0px';
                flecha.style.transform = 'rotate(0deg)';
            }else{
                infoContent.style.maxHeight = `${infoContent.scrollHeight}px`;
                flecha.style.transform = 'rotate(90deg)';
            }
        }else{
            infoContent.style.maxHeight = '0px';
            flecha.style.transform = 'rotate(0deg)';
        }
    })
}