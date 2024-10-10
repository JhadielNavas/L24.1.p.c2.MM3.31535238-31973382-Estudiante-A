import Cl_Estudiante from "./Cl_Estudiante.js";

export default class Becado extends Cl_Estudiante {
    constructor(nombre, acumNotas, cantidadMaterias,) {
        super(nombre, acumNotas, cantidadMaterias);
    }

    calcularBeca(){
        if (this.promedio() > 15)
            return "recibe una beca de $30";
            else
            if (this.promedio() == 10)
                return "recibe una beca de $20";
                else
                if (this.promedio() < 10)
                    return "No le corresponde beca";
    }
    }
