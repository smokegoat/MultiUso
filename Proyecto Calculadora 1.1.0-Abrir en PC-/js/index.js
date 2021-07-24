function sacarRespuesta(){
    let select = document.getElementById("select");
    let input1 = document.getElementById("input1").value
    let input2 = document.getElementById("input2").value
    let operador = select.value;
        if (operador == "RESTAR") {
            let respuesta = parseInt(input1) - parseInt(input2);
            document.getElementById("resultado").innerHTML = `<p class="titulo resultitulo" id="resultado">${respuesta}</p>`;
        }
        else if(operador == "SUMAR"){
            let respuesta = parseInt(input1) + parseInt(input2);
            document.getElementById("resultado").innerHTML = `<p class="titulo resultitulo" id="resultado">${respuesta}</p>`}
        else if(operador == "MULTIPLICAR"){
            let respuesta = parseInt(input1) * parseInt(input2);
            document.getElementById("resultado").innerHTML = `<p class="titulo resultitulo" id="resultado">${respuesta}</p>`;
        }
        else if(operador == "DIVIDIR"){
            let respuesta = parseInt(input1) / parseInt(input2);
            document.getElementById("resultado").innerHTML = `<p class="titulo resultitulo" id="resultado">${respuesta}</p>`;
        }
        else if(operador == "POTENCIA"){
            let respuesta = Math.pow (parseInt(input1),parseInt(input2));
            document.getElementById("resultado").innerHTML = `<p class="titulo resultitulo" id="resultado">${respuesta}</p>`;
        }
}
function magiaon() {
  document.getElementById("botonInstruccionesBasicas").addEventListener("dblclick", () => {
    document.getElementById("instrucciones").classList.remove("invisible");
    document.getElementById("instrucciones").classList.add("viible");
  });
}
function magiaoff() {
  document.getElementById("botonInstruccionesBasicas").addEventListener("click", () => {
    document.getElementById("instrucciones").classList.remove("visible");
    document.getElementById("instrucciones").classList.add("invisible");
  });
}
function raizCuadrada(){
  
}
window.onload = function(){
document.getElementById("sacarResultado").addEventListener("click",sacarRespuesta);
    magiaon();
    magiaoff();
}
