

// ESTO ES LO PRIMERO, DEFINIMO LA CLASS ( O MOLDE ) DE LOS DATOS QUE VAMOS A NECESITAR PARA REGISTRAR UN PROMOTOR

class promotor {
    constructor(nombre, apellido, codigoDeIdentificacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.codigoDeIdentificacion = codigoDeIdentificacion;
        }
}

// ACA TENEMOS ALGUNOS PROMOTORES DE LA AGENCIA.

const promotorEmiliano = new promotor("Emiliano", "vega", 1);
const promotorIvan = new promotor("Ivan", "Roalandini", 2);
const promotorManuel = new promotor("Manuel", "Ruiz", 3);
const promotorAdrian = new promotor("Adrian", "Rinaldi", 4);

// DEFINIMOS UN ARRAY O LISTA DONDE VAMOS A AGREGAR A LOS PROMOTORES 
const arrayPromotor= [];

// ACA SUBIMOS A LOS PROMOTORES AL ARRAY

arrayPromotor.push(promotorEmiliano);
arrayPromotor.push(promotorIvan);
arrayPromotor.push(promotorManuel);
arrayPromotor.push(promotorAdrian);


// CON EL CONSOLE LOG CORROBORAMOS QUE ESTEN SUBIDOS A LA BDD.
console.log(arrayPromotor); 

// DECLARO UNA FUNCION DE BIENVENIDA DONDE SE LE SOLICITA AL ENCARGADO QUE INGRESE SU NOMBRE 
// PARA UN TRATO MAS PERSONALIZADO.

function saludoInicial() {
    alert("Bienvenidos a la plataforma de UP3");
    let nombreSaludoInicial = prompt("ingrese por favor su nombre");
    alert("bienvenido " + nombreSaludoInicial + " por favor selecciona que actividad quieres realizar");
    return saludoInicial;
}


// Y LO PROXIMO ES, ESTABLECER UN MENU DE OPCIONES DONDE EL ENCARGADO DEFINIRÁ LA ACCIÓN QUE DESEA REALIZAR.-

function menuPrincipal() {
    let opciones = parseInt(prompt("Ingrese la opcion deseada: \n 1) Alta de promotor \n 2)Baja de promotor \n 3) consulta promotores \n 4) Salir "));
    return opciones;
}


// CASE 1 ( ALTA DE UN NUEVO PROMOTOR).-

function altaPromotor() {
    let nombre = prompt("ingrese el ó los nombres del nuevo promotor");
    let apellido = prompt("Ingrese el apellido del nuevo promotor");
    let codigoDeIdentificacion = prompt("ingrese el numero de identificacion del promotor");
    let nuevoPromotor = new promotor(nombre, apellido, codigoDeIdentificacion);
    arrayPromotor.push(nuevoPromotor);
    console.log(arrayPromotor);
    return altaPromotor;


}

// bla bla bla lo saquueeee

let opciones = menuPrincipal();

switch (opciones) {
  case 1:
    altaPromotor();
    break;
  // Otros casos del switch
}


 
/* let opcion = menuPrincipal();

switch (opcion) {
    case 1: 
    altaPromotor();
        break;

    } */


    /*    case 2: bajaPromotor();
        break;
    case 3: consultaPromotores();
        break;
    case 4: salir();
        break;

    default:
        break;
} */


// OPCION NUMERO 3 ( CONSULTA DE DATOS DE UN PROMOTOR YA EXISTENTE EN LA BASE DE DATOS ).-

/* let nombre= prompt("ingrese el nombre del promotor que desea encontrar");
let promotores= arrayPromotor.find(promotores => promotores === nombre);
console.log(arrayPromotor); */

