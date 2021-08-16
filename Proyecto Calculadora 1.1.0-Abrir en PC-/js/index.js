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
function raizCuadrada() {
    let subR = document.getElementById("subR").value
    let respuesta = Math.sqrt(subR);
    document.getElementById("resultadoRaiz").innerHTML = `<p class="titulo resultitulo" id="resultado">${respuesta}</p>`;
    }
function potencia() {
  let base = document.getElementById("in.base").value;
  let potencia = document.getElementById("in.potencia").value;
  let resultado = Math.pow(base, potencia)
  document.getElementById("resultdopotencia").innerHTML =`<p class="titulo resultitulo" id="resultado">${resultado}</p>`;
}
function magiaon() {
    document.getElementById("instrucciones").classList.remove("invisible");
    document.getElementById("instrucciones").classList.add("visible");
      }
function magiaoff() {
    document.getElementById("instrucciones").classList.remove("visible");
    document.getElementById("instrucciones").classList.add("invisible");
      }
function magiaon2() {
    document.getElementById("instrucciones2").classList.remove("invisible");
    document.getElementById("instrucciones2").classList.add("visible");
}
function magiaoff2() {
  document.getElementById("instrucciones2").classList.remove("visible");
  document.getElementById("instrucciones2").classList.add("invisible");
}
function magiaon3() {
  document.getElementById("instrucciones3").classList.remove("invisible");
  document.getElementById("instrucciones3").classList.add("visible");
}
function magiaoff3() {
  document.getElementById("instrucciones3").classList.remove("visible");
  document.getElementById("instrucciones3").classList.add("invisible");
}
function reloj() {
  let momentoActual = new Date();
  let hora = momentoActual.getHours();
  let minuto = momentoActual.getMinutes();
  let horaImprimible = hora + ":" + minuto;
  document.getElementById("reloj").value = horaImprimible;
  setTimeout("reloj()", 1000);
}
  function onKeyPressBlockChars(e, numero) {
    var key = window.event ? e.keyCode : e.which;
    var keychar = String.fromCharCode(key);
    reg = /\d|\./;
    if (numero.indexOf(".") != -1 && keychar == ".") {
      return false;
    } else {
      return reg.test(keychar);
    }
  }
  function calculaPorcentajes(numero) {
    
    document.getElementById("porcent60").value = Math.floor(numero * 60) / 100;
    document.getElementById("porcent50").value = Math.floor(numero * 50) / 100;
    document.getElementById("porcent30").value = Math.floor(numero * 30) / 100;
    document.getElementById("porcent25").value = Math.floor(numero * 25) / 100;
    document.getElementById("porcent15").value = Math.floor(numero * 15) / 100;
    document.getElementById("porcent5").value = Math.floor(numero * 5) / 100;

  }
    document.getElementById("sacarResultado").addEventListener("click",sacarRespuesta);
    document.getElementById("sacarRaiz").addEventListener("click", raizCuadrada);
    document.getElementById("sacarPotencia").addEventListener("click",potencia);
    document.getElementById("botonInstruccionesBasicas").addEventListener("dblclick",magiaon);
    document.getElementById("botonInstruccionesBasicas").addEventListener("click",magiaoff);
    document.getElementById("InstruccionesRaiz").addEventListener("dblclick",magiaon2);
    document.getElementById("InstruccionesRaiz").addEventListener("click",magiaoff2);
    document.getElementById("Ins.potencia").addEventListener("dblclick",magiaon3)
    document.getElementById("Ins.potencia").addEventListener("click",magiaoff3);
    reloj(); 