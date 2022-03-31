export class Persona {
    nombre: string;
    edad:  number;
    kilometros:number;

    caminar() {
        console.log(`Estoy caminando ${this.kilometros} kilometros `);
       
    }

    constructor(cuantoKilometros:number) {
        this.kilometros = cuantoKilometros;
    }
}
