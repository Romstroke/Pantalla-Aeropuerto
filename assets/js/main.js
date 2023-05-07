

///////// FUNCION PARA ALERTA EN MODAL

function cerrarModal(){
   document.getElementById('modal').style.display = "none";
}

var cerrar = document.getElementById('cerrar')
cerrar.addEventListener('click', cerrarModal);


//////// FUNCION QUE ENTREGA HORA ACTUAL

let date = new Date(Date.now());
// const fechaActual = date.toISOString('es-CL').substring(0, 10);
const horaActual = date.toLocaleTimeString('es-CL').substring(0, 5);
const horaFormateada = `${horaActual}`;
// console.log(fechaActual);
console.log(horaActual);


/////////// FUNCION QUE INYECTA HORA ACTUAL

function injectTime(){

   var hora = document.getElementById('espacioHora');

   var infoHora =

   `
   <h3>${horaActual}</h3>
   
   `

hora.innerHTML = infoHora;

}

injectTime()



///////// FUNCION QUE ENTREGA FECHA ACTUAL

const fechaActual = new Date();
const dia = fechaActual.getDate().toString().padStart(2, '0');
const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
const anio = fechaActual.getFullYear().toString();
const fechaFormateada = `${dia}-${mes}-${anio}`;
console.log(fechaFormateada);
// Output: "04-05-2023"

//////////////// FUNCION QUE INYECTA FECHA ACTUAL

function injectDate(){

   var fecha = document.getElementById('espacioFecha');

   var infoFecha =

        `
        <h3>${dia}-${mes}-${anio}</h3>        
        
        `

fecha.innerHTML = infoFecha;

}

injectDate();

/////////////// ARRAY VUELOS

var vuelos = ['122','3','45','18','86','22','100','36','vaca'];

// var random_item = vuelos[Math.floor(Math.random()*vuelos.length)];

try{

   var random_item = vuelos[Math.round(Math.random()*vuelos.length)];
   console.log(random_item)

}catch (error) {
   console.error(error);
}


// /////// FUNCION QUE RECORRE LOS VUELOS y los inyecta


try{

   function recorrerVuelos(){

      var espacioVuelos = document.getElementById('espacioVuelos');
   
        var infoVuelo =
   
            `
               <h3>${random_item}</h3>
            
            `
       
   
      console.log(espacioVuelos);
      espacioVuelos.innerHTML = infoVuelo;
   }
   
   recorrerVuelos()

}catch (error) {
   console.error(error);
}

///// ARRAY TERMINALES

var terminales = {
   0:'1',
   1:'2',
   2:'3',
   3:'4',
   4:'5',
   5:'6',
   6:'7',
   7:'8',
   8:'9',
   9:'10'};

   var terminales = ['1','2','23','45'];


   var randomItem = terminales[Math.floor(Math.random()*terminales.length)];
   console.log(random_item)

//////// FUNCION QUE RECORRE LOS TERMINALES y los inyecta

function recorrerTerminales(){

   var espacioTerminal = document.getElementById('espacioTerminal');
   
   var infoTerminal=

            `
            <h3>${randomItem}</h3>
            
            `

   console.log(espacioTerminal);
   espacioTerminal.innerHTML = infoTerminal;

}

recorrerTerminales()


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// var aviso = "Pasajero, se le recuerda que para abordar el avión debe tener\n";
//            aviso +="en mano su pasaporte y su boleto de embarque. Manténgase\n";
//            aviso += "atento a los avisos mediante esta plataforma.\n\n";


// alert(aviso);

   // var tareasObjeto = {'cero':'uno','dos':'tres'};
  // var tareasArr = ['cero','uno','dos'];
  // console.log(typeof tareasObjeto)
// console.log(typeof tareasArr)


  // var num = 2.56
  // console.log(num.toFixed(1))

// function alertaModal(){
//     document.getElementByClassName('modal').style.display= "block";
// }

// var modal = document.getElementById('modal')
// modal.addEventListener('load', alertaModal); ///No es necesario porque aparece al abrir el navegador, pero... load?


/////// los 4 metodos para redondear un numero a un entero
// Math.round
// Math.cell
// Math.floor
// Math.trunc
///////////// pero por qué tiene que estar ese math.round? (o uno de los 4)
////////////// si yo tengo puros enteros


// fechaActual.getUTCDate() //devuelve el dia en que estamos

//.getUTCMonth() retorna el mes pero partiendo del 0, osea mayo es 4
//.getUTCMonth()+1 te da 5 mes de mayo

//.getFullYear() retorna el año en que estamos

//var fechaEspecifica = new Date(2020,3,25,11,30,0)
                        /////////constructor//////////

// function recorrerVuelos(){

//    var espacioVuelos = document.getElementById('espacioVuelos');

//    var i=0;
//    var infoVuelo = ''

//    for (i=0; i<vuelos.length; i++){

//       infoVuelo +=

//          `
//             <h3>${vuelos[i]}</h3> esto entrega todos los cosos
         
//          `

//    }

//    console.log(espacioVuelos);
//    espacioVuelos.innerHTML = infoVuelo;
// }

// recorrerVuelos()                         

// let numbers = [1, 2, 3, 4, 5];
// console.log(shuffle(numbers));


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const shuffledArray = array.sort((a, b) => 0.5 - Math.random());