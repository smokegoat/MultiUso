function sacarRespuesta(){
    let select = document.getElementById("select");
    let input1 = parseInt(document.getElementById("input1").value);
    let input2 = parseInt(document.getElementById("input2").value);
    let operador = select.value;

        if (operador == "RESTAR") {
          let respuesta = input1 - input2;
          if (isNaN(respuesta)) {
          document.getElementById("resultado").innerHTML = 
          `<p class="titulo resultitulo" id="resultado">Hubo un error</p>`;
          }
          else{
          document.getElementById("resultado").innerHTML = 
          `<p class="titulo resultitulo" id="resultado">${respuesta}</p>`;
          }
        }
        else if(operador == "SUMAR"){
          let respuesta = input1 + input2;
          if (isNaN(respuesta)) {
            document.getElementById("resultado").innerHTML = 
          `<p class="titulo resultitulo" id="resultado">Hubo un error</p>`;
          }
          else{
            document.getElementById("resultado").innerHTML = 
          `<p class="titulo resultitulo" id="resultado">${respuesta}</p>`
          }
        }
      
        else if(operador == "MULTIPLICAR"){
          let respuesta = input1 * input2;
          if (isNaN(respuesta)) {
            document.getElementById("resultado").innerHTML = 
          `<p class="titulo resultitulo" id="resultado">Hubo un error</p>`;
          }else{
            document.getElementById("resultado").innerHTML = 
            `<p class="titulo resultitulo" id="resultado">${respuesta}</p>`;
          }
        }
          
        else if(operador == "DIVIDIR"){
          let respuesta = Math.round(input1 / input2);
          if (isNaN(respuesta)) {
            document.getElementById("resultado").innerHTML = 
          `<p class="titulo resultitulo" id="resultado">Hubo un error</p>`;
          }else{
            document.getElementById("resultado").innerHTML = 
            `<p class="titulo resultitulo" id="resultado">${respuesta}</p>`;
          }
        }
        
        else if(operador == "POTENCIA"){
          let respuesta = Math.pow (input1,input2);
          if (isNaN(respuesta)) {
            document.getElementById("resultado").innerHTML = 
          `<p class="titulo resultitulo" id="resultado">Hubo un error</p>`;
          }else{
            document.getElementById("resultado").innerHTML = 
            `<p class="titulo resultitulo" id="resultado">${respuesta}</p>`;}
          }
        
}

function raizCuadrada() {
    let subR = document.getElementById("subR").value;
      let respuesta = Math.round(Math.sqrt(subR));
      document.getElementById("resultadoRaiz").innerHTML = `<p class="titulo resultitulo" id="resultado">${respuesta}</p>`;
}


function potencia() {
  let base = document.getElementById("in.base").value;
  let potencia = document.getElementById("in.potencia").value;
  if (!isNaN(base) && !isNaN(potencia)) {
  let resultado = Math.pow(base, potencia);
  document.getElementById("resultdopotencia").innerHTML =`<p class="titulo resultitulo" id="resultado">${resultado}</p>`;
  }else{
    alert("Hubo un Error");
  }
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
  if (!isNaN(cantidad) && !isNaN(porcentajeX)) {
    let resultado = Math.floor(cantidad * porcentajeX)/100;
    document.getElementById("resultadoPorcentaje").innerHTML=`<p class="titulo resultitulo" id="resultado">${resultado}</p>`
  }else{
    alert("Hubo un Error!");
  }
}
function areaCuadrado() {
  let largoCuadrado = document.getElementById("largoCudro").value;
  let anchoCuadrado = document.getElementById("anchoCudro").value;
  if (!isNaN(largoCuadrado) && !isNaN(anchoCuadrado)) {
    let resultado = anchoCuadrado * largoCuadrado;
    document.getElementById("respCrdo").innerHTML = `<p class="resultitulo titulo">${resultado}</p>`;
  }else{
    document.getElementById("respCrdo").innerHTML = `<p class="resultitulo titulo">Hubo un Error</p>`;
  }
}
function areaTriangulo() {
  let largoTriangulo = document.getElementById("largoTri").value;
  let anchoTriangulo = document.getElementById("anchoTri").value;
  if (!isNaN(largoTriangulo)&&!isNaN(anchoTriangulo)) {
    let resultado = (largoTriangulo * anchoTriangulo) / 2;
    document.getElementById("resptri").innerHTML = `<p class="resultitulo titulo">${resultado}</p>`;
  }else{
    alert("Hubo un Error!");
  }
}
function areaCircunferencia() {
  let radio = document.getElementById("radio").value;
  if (!isNaN(radio)) {
    let resultado = Math.round(Math.pow(radio,2)/Math.PI);
    document.getElementById("respCir").innerHTML =`<p class="resultitulo titulo">${resultado}</p>`
  }else {
    alert("Hubo un Error!");
  }
}
function calcOHMS() {
  var voltaje = document.getElementById("voltaje").value;
  var intensidad = document.getElementById("intensidad").value;
  var resistencia = document.getElementById("resistencia").value;

   if(!isNaN(voltaje) || !isNaN(intensidad) || !isNaN(resistencia)){
    if (voltaje == "" || voltaje == 0) {
        let resultado = intensidad * resistencia;
        if (resultado == Infinity) {
          alert("faltan datos")
        } else {
          alert(resultado)
        }
      }
      else if(intensidad == "" || intensidad == 0){
        let resultado = voltaje/resistencia;
        if (resultado == Infinity) {
          alert("faltan datos")
        } else {
          alert(resultado)
        }
      }
      else if(resistencia== ""|| resistencia == 0)
      {
        let resultado = voltaje/intensidad;
        if (resultado == Infinity) {
          alert("faltan datos")
        } else {
          alert(resultado)
        }
      }
  }else {
    alert("Error %%%")
  }
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
function magiaOn5() {
  document.getElementById("instrucciones5").classList.remove("invisible");
  document.getElementById("instrucciones5").classList.add("visible");
}
function magiaOff5() {
  document.getElementById("instrucciones5").classList.remove("visible");
  document.getElementById("instrucciones5").classList.add("invisible");
}
function magiaOn6() {
  document.getElementById("instrucciones6").classList.remove("invisible");
  document.getElementById("instrucciones6").classList.add("visible");
}
function magiaOff6() {
  document.getElementById("instrucciones6").classList.remove("visible");
  document.getElementById("instrucciones6").classList.add("invisible");
}
function magiaOn7() {
  document.getElementById("instrucciones7").classList.remove("invisible");
  document.getElementById("instrucciones7").classList.add("visible");
}
function magiaOff7() {
  document.getElementById("instrucciones7").classList.remove("visible");
  document.getElementById("instrucciones7").classList.add("invisible");
}

    document.getElementById("sacarResultado").addEventListener("click",sacarRespuesta);
    document.getElementById("sacarRaiz").addEventListener("click", raizCuadrada);
    document.getElementById("sacarPotencia").addEventListener("click",potencia);
    document.getElementById("botonInstruccionesBasicas").addEventListener("click",magiaon);
    document.getElementById("botonInstruccionesBasicas").addEventListener("dblclick",magiaoff);
    document.getElementById("InstruccionesRaiz").addEventListener("click",magiaon2);
    document.getElementById("InstruccionesRaiz").addEventListener("dblclick",magiaoff2);
    document.getElementById("Ins.potencia").addEventListener("click",magiaon3)
    document.getElementById("Ins.potencia").addEventListener("dblclick",magiaoff3);
    document.getElementById("Ins.porcentaje").addEventListener("click",magiaOn4);
    document.getElementById("Ins.porcentaje").addEventListener("dblclick",magiaOff4);
    document.getElementById("resultadoPorcent").addEventListener("click",calcularPorcentaje);
    document.getElementById("areaCudro").addEventListener("click",areaCuadrado);
    document.getElementById("areaTri").addEventListener("click",areaTriangulo);
    document.getElementById("botonCircun").addEventListener("click",areaCircunferencia);
    document.getElementById("Ins.Area_cuadrado").addEventListener("click",magiaOn5);
    document.getElementById("Ins.Area_cuadrado").addEventListener("dblclick",magiaOff5);
    document.getElementById("Ins.Area_triangulo").addEventListener("click",magiaOn6);
    document.getElementById("Ins.Area_triangulo").addEventListener("dblclick",magiaOff6);
    document.getElementById("Ins.Area_circunferencia").addEventListener("click",magiaOn7);
    document.getElementById("Ins.Area_circunferencia").addEventListener("dblclick",magiaOff7);
    document.getElementById("resul_ohm").addEventListener("click",calcOHMS);
    reloj();