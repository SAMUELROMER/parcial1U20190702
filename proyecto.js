
module.exports = (CantidadEmpleados,callback) => {
    if (CantidadEmpleados<= 0)
        setTimeout(() => 
            callback(new Error("Las Horas y el numero de personas deben ser mayores a 0 : Horas = "
                + TrabajadoresHoras + ", y Cantidad Empleados = " + CantidadEmpleados), 
            null),
            2000);
    else
        setTimeout(() => 
            callback(null, {
                Empleados:() => (CantidadEmpleados)
            }), 
            2000);
}

