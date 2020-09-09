const inquirer = require('inquirer')
const Choices = require('inquirer/lib/objects/choices')

const proyecto  = require('./proyecto');


var  CantidadTotalProyecto=0;
var CantidadTotalHoras=0;
var CantidadEmpleados=5 ;

var PorcentajeHolgura = 0.08;
var CantidadMaterial = 1000.00;
var CantidadHolgura = CantidadMaterial * PorcentajeHolgura;
var CantidadTotalMaterial= CantidadMaterial+ CantidadHolgura;

var Trabajadores= new Array(4);
var TrabajadoresHoras= new Array(4);
var TrabajadoresPecio= new Array(4);

var TotalPagarTrabajador = new Array(4);

//nombre,horas,precio por la hora,Total a pagar
Trabajadores=["Samuel","Jonas","Victor","Antonio","Cesar"];
TrabajadoresHoras=[34,86,66,88,55];
TrabajadoresPrecio=[15.00,6.00,8.00,5.00,3.00];

function CalcularTotalPersona(antidadEmpleados){
    console.log("Bienvenid@s a nuestra App");
    console.log("Calcularemos el total de cada trabajador");
    
    proyecto(CantidadEmpleados, (err,proyec) => {
       if (err) {
       console.log("ERROR: ", err.message);
       }
       else {
         console.log("La cantidad de empleados son " +proyec.Empleados() )   
    var i;
   
    for(i=0;i<CantidadEmpleados;i++) {
       var n=i+1;
       console.log("Los datos son del trabajador numero " +n )
       console.log("Nombre = "
    + Trabajadores[i] +" , HorasTrabajadas son  = " + TrabajadoresHoras[i]
    +" y el total de horas precio = " + TrabajadoresPrecio[i]);
    TotalPagarTrabajador[i]=TrabajadoresHoras[i]*TrabajadoresPrecio[i];
    console.log("Total a pagar al $  = " +  TotalPagarTrabajador[i]);
 
   CantidadTotalHoras=CantidadTotalHoras+TrabajadoresHoras[i];
     CantidadTotalProyecto=CantidadTotalProyecto+TotalPagarTrabajador[i];
    }
 
    console.log("Total de  precio por horas de todos los tabajadores $ " +CantidadTotalProyecto);
    console.log("Total de   horas " +CantidadTotalHoras);
 
    }
    CalcularProyecto();
 });
 }
  
  function CalcularProyecto(){
    console.log("Calcularemos el total del proyecto");
    

    var CantidadTOTAL = CantidadTotalProyecto+CantidadTotalMaterial;
    console.log("NOTA : CADA TRABAJADOR TIENE UN SUELDO DIFERENTE PARA DETALLES DEBES SELECIONAR LA OPCION 1 EN MENU");
    
    console.log("Numero de Trabajadores es = " +CantidadEmpleados);

      console.log("Total de   horas " +CantidadTotalHoras);

    console.log("Total de precio de trabajo por horas de todos los trabajadores  es = $  " +CantidadTotalProyecto);

    console.log("La cantidad en materia es = $" +CantidadTotalMaterial +" y  Holgura es = $"+CantidadHolgura  +" en total en = $ " +CantidadTotalMaterial)

    console.log("La cantidad Total del proyecto es = $ " +CantidadTOTAL)
    }

    CalcularTotalPersona();
  

