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
function magiaOn4() {
  document.getElementById("instrucciones4").classList.remove("invisible");
  document.getElementById("instrucciones4").classList.add("visible");
}
function magiaOff4() {
  document.getElementById("instrucciones4").classList.remove("visible");
  document.getElementById("instrucciones4").classList.add("invisible");
}
function reloj() {
  let momentoActual = new Date();
  let hora = momentoActual.getHours();
  let minuto = momentoActual.getMinutes();
  let horaImprimible = " "+ hora + ":" + minuto;
  document.getElementById("reloj").value = horaImprimible;
  setTimeout("reloj()", 1000);
}
function calcularPorcentaje() {
  let cantidad = document.getElementById("cantidad").value;
  let porcentajeX = document.getElementById("porcentaje").value;
  let resultado = Math.floor(cantidad * porcentajeX)/100;
  document.getElementById("resultadoPorcentaje").innerHTML=`<p class="titulo resultitulo" id="resultado">${resultado}</p>`
}
function areaCuadrado() {
  let largoCuadrado = document.getElementById("largoCudro");
  let anchoCuadrado = document.getElementById("anchoCudro");
  let resultado = anchoCuadrado.value * largoCuadrado.value;
  document.getElementById("respCrdo").innerHTML = `<p class="resultitulo titulo">${resultado}</p>`;
}
function areaTriangulo() {
  let largoTriangulo = document.getElementById("largoTri").value;
  let anchoTriangulo = document.getElementById("anchoTri").value;
  let resultado = (largoTriangulo * anchoTriangulo) / 2;
  document.getElementById("resptri").innerHTML = `<p class="resultitulo titulo">${resultado}</p>`;
}
function areaCircunferencia() {
  let radio = document.getElementById("radio").value;
  let resultado = Math.pow(radio,2)/Math.PI
  document.getElementById("respCir").innerHTML =`<p class="resultitulo titulo">${resultado}</p>`
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
    document.getElementById("Ins.porcentaje").addEventListener("click",magiaOn4);
    document.getElementById("Ins.porcentaje").addEventListener("dblclick",magiaOff4);
    reloj(); 
    document.getElementById("resultadoPorcent").addEventListener("click",calcularPorcentaje);
    document.getElementById("areaCudro").addEventListener("click",areaCuadrado);
    document.getElementById("areaTri").addEventListener("click",areaTriangulo);
    document.getElementById("botonCircun").addEventListener("click",areaCircunferencia);