function enviar(){

        let nombre = document.getElementById('nombre').value;
        let email = document.getElementById('email');
        let sector = document.getElementById('sector').value;
        let mensaje = document.getElementById('mensaje').value;
        
        
        // let templateParams = {
        //     nombre: nombre,
        //     email: email,
        //     sector: sector,
        //     mensaje: mensaje
        // };
        
        var validado = validarMail(email)
        if(validado == false){
            alert ('Mensaje enviado exitosamente')
        }

}


    function validarMail(email, error) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const testRegex = emailRegex.test(email.value);
    var label = document.querySelector('label[for="email"]');
    var vacio = true;

    if (!testRegex) {
        email.style.borderColor = "red";
        email.placeholder = error;
        if (email.value != "") {
            label.textContent = "Email: Correo Invalido";
            label.style.color = "red";
        }
    } else if (testRegex) {
        email.style.borderColor = "green";
        email.placeholder = "";
        label.textContent = "Email:";
        label.style.color = "";
        vacio = false;
    }
    return vacio
}