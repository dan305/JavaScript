function inicio(validar) {
nombre = prompt(
    "Bienvenido antes de arrancar a pilotear necesito saber tu nombre asi te agendo."
);

validar = alert("Su nombre para pilotear es  " + nombre);
}

function encuesta(){
alert("Te hare una breve encuensta solo necesito eligas alguna de las siguientes");
let marcas = Number(prompt("Elige alguna de las 4 marcas: \n 1 Volkswagen \n 2 Chevrolet \n 3 Audi \n 4  Dodge")
)
switch (marcas){
    case 1:
    alert(
        "Genial elegiste VOLKSWAGEN buena eleccion."
        );    
    break;
    case 2:
    alert(
        "Genial elegiste CHEVROLET que buena eleccion."
        );
    break;
    case 3:
    alert(
        "WOOW elegiste AUDI eres muy bueno eligiendo."
        );
    break;
    case 4:
    alert(
        "Buena eleccion, has elegido DODGE."
        );
    break;
    }
}
function manejar(){
alert("Ahora que ya sabes la marca de tu vehiculo necesitas saber a donde queres ir.")
  // let destino = 0
  // while(destino == 0){
  //   destino = Number(alert("No olvides de definir a donde vamos a llegar."))
  // }
let ciudad = Number(prompt("Elige una de las 3 opciones para llegar. \n 1 Mar Del Plata \n 2 Buenos Aires \n 3 Villa Luro."))
switch (ciudad){
    case 1:
        alert("Pone 1era y arranca para MAR DEL PLATA")
        break;
    case 2:
        alert("Pone 1era y arranca para BUENOS AIRES")
        break;
    case 3:
        alert("Pone 1era y arranca para VILLA LURO")
        break;
    default:
        alert('No has seleccionado ninguna ruta asi que ahora no vamos a ir a ningun lado.')
        break;
    }
}


function final (){
  alert("Ya llegaste al final ahora baja y descansa esos pies Piloto.")
}



inicio();
encuesta();
manejar();
final();