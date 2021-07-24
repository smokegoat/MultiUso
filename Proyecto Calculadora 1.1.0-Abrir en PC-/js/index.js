function sacarRespuesta(){
    let select = document.getElementById("select");
    let input1 = document.getElementById("input1").value
    let input2 = document.getElementById("input2").value
    let operador = select.value;
        if (operador == "RESTAR") {
          let respuesta = parseInt(input1) - parseInt(input2);
          document.getElementById("resultado").innerHTML = `<p class="titulo resultitulo" id="resultado">${respuesta}</p>`;}
        else if(operador == "SUMAR"){
          let respuesta = parseInt(input1) + parseInt(input2);
          document.getElementById("resultado").innerHTML = `<p class="titulo resultitulo" id="resultado">${respuesta}</p>`}
        else if(operador == "MULTIPLICAR"){
          let respuesta = parseInt(input1) * parseInt(input2);
          document.getElementById("resultado").innerHTML = `<p class="titulo resultitulo" id="resultado">${respuesta}</p>`;}
        else if(operador == "DIVIDIR"){
          let respuesta = parseInt(input1) / parseInt(input2);
          document.getElementById("resultado").innerHTML = `<p class="titulo resultitulo" id="resultado">${respuesta}</p>`;}
        else if(operador == "POTENCIA"){
          let respuesta = Math.pow (parseInt(input1),parseInt(input2));
          document.getElementById("resultado").innerHTML = `<p class="titulo resultitulo" id="resultado">${respuesta}</p>`;}
      }
function magiaon() {
    document.getElementById("instrucciones").classList.remove("invisible");
    document.getElementById("instrucciones").classList.add("viible");

      }
function magiaoff() {
    document.getElementById("instrucciones").classList.remove("visible");
    document.getElementById("instrucciones").classList.add("invisible");
      }
      
function magiaon2() {
    document.getElementById("instrucciones2").classList.remove("invisible");
    document.getElementById("instrucciones2").classList.add("viible");

      }
function magiaoff2() {
    document.getElementById("instrucciones2").classList.remove("visible");
    document.getElementById("instrucciones2").classList.add("invisible");
      }

    function raizCuadrada() {
    let subR = document.getElementById("subR").value
    let respuesta = Math.sqrt(subR);
    document.getElementById("resultadoRaiz").innerHTML = `<p class="titulo resultitulo" id="resultado">${respuesta}</p>`;
    }


window.onload = function(){
    document.getElementById("sacarResultado").addEventListener("click",sacarRespuesta);
    document.getElementById("sacarRaiz").addEventListener("click", raizCuadrada);

    document.getElementById("botonInstruccionesBasicas").addEventListener("dblclick",magiaon);
    document.getElementById("botonInstruccionesBasicas").addEventListener("click",magiaoff);

    document.getElementById("InstruccionesRaiz").addEventListener("dblclick",magiaon2);
    document.getElementById("InstruccionesRaiz").addEventListener("click",magiaoff2);
  }
