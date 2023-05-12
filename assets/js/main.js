//////// FUNCION QUE ENTREGA HORA ACTUAL

let date = new Date(Date.now());
// const fechaActual = date.toISOString('es-CL').substring(0, 10);
const horaActual = date.toLocaleTimeString('es-CL').substring(0, 5);
const horaFormateada = `${horaActual}`;
// console.log(fechaActual);
console.log(horaActual);

///////// FUNCION QUE ENTREGA FECHA ACTUAL

const fechaActual = new Date();
const dia = fechaActual.getDate().toString().padStart(2, '0');
const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
const anio = fechaActual.getFullYear().toString();
const fechaFormateada = `${dia}-${mes}-${anio}`;
console.log(fechaFormateada);

/////////// ARRAY VUELOS Y OBJETO DE JS QUE LO RECORRE

var vuelos = ['122','3','45','18','86','22','100','36'];

   // var random_item = vuelos[Math.floor(Math.random()*vuelos.length)];

   var randomNumber = Math.floor(Math.random() * 8);
   console.log(randomNumber)
   var random_item = vuelos[randomNumber];

   console.log(random_item)

///// OBJETO TERMINALES y recorrido

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
   9:'10'}; // nada impedirá que use un objeto muajajajaja

   // var terminales = ['1','2','23','45'];

                                          //// esto es lo mismo que ponerle un 10
   var random_number = Math.floor(Math.random()*Object.keys(terminales).length); // Object.keys(terminales).length object.keys método, que devuelve una array que representa todas las propiedades enumerables del objeto. Si el objeto está vacío, la longitud de llamada de la array devuelta por Object.keys() debería ser 0.
   console.log(random_number) //esto me esta dando el largo del array
   var randomItem = terminales[random_number]; //esto me esta llenando el largo del array con el contenido disponible para cada lugar.

   console.log(randomItem);

///////// ULTRA FUNCION QUE INYECTA TODO (lo que mas se pueda... OSEA EL BODY)

function injectTodo(){

   document.getElementById('body').innerHTML=

   `
   <header id="header" class="header">
        <div>
            <h1 class="header__title"><b>Bienvenido a la plataforma <i>Eport</i></b></h1>
            <p class="header__p">Aquí podrá encontrar la información más reciente<br> acerca de los vuelos en nuestro aeropuerto.</p>
        </div>
    </header>
    <section class="contenedor__time">
         <div id="espacioHora" class="time">
            <h2>Hora:</h2>
            <div>
               <h3>${horaActual}</h3>
            </div>
         </div>
         <div id="espacioFecha" class="time">
            <h2>Fecha:</h2>
            <div>
               <h3>${dia}-${mes}-${anio}</h3>   
            </div>  
         </div>   
    </section>
    <section class="contenedor__vuelo">
        <div >
            <div id="espacioVuelos">
               <h2>El vuelo más próximo</h2>
               <p>Número de vuelo:</p>
               <h3>${random_item}</h3>
            </div>
            <div id="espacioTerminal">
               <p>Terminal:</p> 
               <h3>${randomItem}</h3>
            </div>
        </div>
    </section>
    <div id="modal" class="modal">
      <div class="modal__contenido">
         <h1 class="modal__aviso">RECUERDE</h1>
         <h3 class="modal__mensaje">
         Estimado pasajero, se le recuerda que para abordar el avión debe tener
         <span>en mano su pasaporte y su boleto de embarque</span>. Manténgase
         atento a los avisos mediante esta plataforma.<br>
         </h3>
         <button id="cerrar">
            <p>OK GRACIAS</p>
         </button>
      </div>
   </div>
   `

}

injectTodo()

///////// FUNCION PARA CERRAR EL MODAL

function cerrarModal(){
   document.getElementById('modal').style.display = "none";
}

var cerrar = document.getElementById('cerrar')
cerrar.addEventListener('click', cerrarModal);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////                                                  /////////////////////////////////////////
///////////////////       funciones de inyección por separado        /////////////////////////////////////////
///////////////////                                                  /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


///// INYECCION EN HEADER (por qué no me toma el tag ni el class?????) porque esos esperan varios elementos que vienen en un array, y tendria que ponerle cual de todos quiero.

   // document.getElementById('header').innerHTML=
   // `
   // <div>
   // <h1 class="header__title"><b>Bienvenido a la plataforma <i>Eport</i></b></h1>
   // <p class="header__p">Aquí podrá encontrar la información más reciente<br> acerca de los vuelos en nuestro aeropuerto.</p>
   // </div>
   // `

///// FUNCION QUE INYECTA EL MODAL

// function injectContentModal(){
//    var modal = document.getElementById('modal');

//    var infoModal =
   
//    `
//    <div class="modal__contenido">
//    <h1 class="modal__aviso">RECUERDE</h1>
//    <h3 class="modal__mensaje">
//      Estimado pasajero, se le recuerda que para abordar el avión debe tener
//      <span>en mano su pasaporte y su boleto de embarque</span>. Manténgase
//      atento a los avisos mediante esta plataforma.<br>
//    </h3>
//    <button id="cerrar">
//      <p>OK GRACIAS</p>
//    </button>
//    </div>
//    `

//    modal.innerHTML = infoModal;
// }

// injectContentModal()

/////////// FUNCION QUE INYECTA HORA ACTUAL

// function injectTime(){

//    var hora = document.getElementById('espacioHora');

//    var infoHora =

//    `
//    <h2>Hora:</h2>
//    <div>
//        <h3>${horaActual}</h3>
//    </div>
   
//    `

// hora.innerHTML = infoHora;

// }

// injectTime()

/////////// FUNCION QUE INYECTA FECHA ACTUAL

// function injectDate(){

//    var fecha = document.getElementById('espacioFecha');

//    var infoFecha =

//         `
//         <h2>Fecha:</h2>
//         <div>
//            <h3>${dia}-${mes}-${anio}</h3>   
//         </div>     
        
//         `

// fecha.innerHTML = infoFecha;

// }

// injectDate();

// /////// FUNCION QUE INYECTA LOS VUELOS

   // function recorrerVuelos(){

   //    var espacioVuelos = document.getElementById('espacioVuelos');
   
   //      var infoVuelo =
   
   //          `
   //          <h2>El vuelo más próximo</h2>
   //          <p>Número de vuelo:</p>
   //          <h3>${random_item}</h3>
            
   //          `
       
   
   //    console.log(espacioVuelos);
   //    espacioVuelos.innerHTML = infoVuelo;
   // }
   
   // recorrerVuelos()


//////// FUNCION QUE INYECTA LOS TERMINALES

// function recorrerTerminales(){

//    var espacioTerminal = document.getElementById('espacioTerminal'); 
   
//    var infoTerminal=

//             `
//             <p>Terminal:</p> 
//             <h3>${randomItem}</h3>
            
//             `

//    console.log(espacioTerminal);
//    espacioTerminal.innerHTML = infoTerminal;

// }

// recorrerTerminales()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////                                                  /////////////////////////////////////////
///////////////////   cosas que dejo para venir a estudiar después   /////////////////////////////////////////
///////////////////                                                  /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var infoModal = document.getElementById('modal')
// infoModal.addEventListener('load',injectContentModal)

// window.addEventListener("load", function(event) {
//    console.log("'Todos los recursos terminaron de cargar!");
//  });


// var aviso = "Pasajero, se le recuerda que para abordar el avión debe tener\n";
//            aviso +="en mano su pasaporte y su boleto de embarque. Manténgase\n";
//            aviso += "atento a los avisos mediante esta plataforma.\n\n";


// alert(aviso);

//    var tareasObjeto = {'cero':'uno','dos':'tres'};
//   var tareasArr = ['cero','uno','dos'];
//   console.log(typeof tareasObjeto)
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