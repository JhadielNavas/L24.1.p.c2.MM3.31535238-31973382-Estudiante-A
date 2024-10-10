import Cl_Becado from "./Cl_Becado.js";

export default class Cl_Principal{
    constructor(){

        const becado1 = new Cl_Becado("Mary", 132, 8);
        const becado2 = new Cl_Becado("Alirio", 315, 35);

        let salida = document.getElementById("salida");

        salida.innerHTML = `Nombre del estudiante: ${becado1.nombre} <br>
        Acumulado de notas: ${becado1.acumNotas} <br>
        Cantidad de materias: ${becado1.cantidadMaterias} <br>
        Nota Promedio: ${becado1.promedio()} <br>
        El/la becado/a ${becado1.nombre}: ${becado1.calcularBeca()}`;
    }



    
}