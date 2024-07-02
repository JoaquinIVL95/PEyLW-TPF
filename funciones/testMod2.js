const respuestasCorrectas = {
    q1: 'b',
    q2: 'c',
    q3: 'b',
    q4: 'b',
    q5: 'c',
    q6: 'c',
    q7: 'b'
};

function enviarTest(){
    let puntaje = 0;
    let totalPreguntas = 7;
    let formTest = document.getElementById('test-rapido');

    for (let i = 1; i <= totalPreguntas ; i++ ){
        let respuesta = formTest['q' + i].value
        if(respuesta === respuestasCorrectas['q' + i]){
            puntaje++;
        }
    }

    let resultado = document.getElementById('resultado');
    let mostrarPuntaje = document.getElementById('puntaje');
    mostrarPuntaje.textContent = `Has acertado ${puntaje} de ${totalPreguntas} preguntas.`
    resultado.style.display='block'; 
}
