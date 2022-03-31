"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(cuantoKilometros) {
        this.kilometros = cuantoKilometros;
    }
    Persona.prototype.caminar = function () {
        console.log("Estoy caminando " + this.kilometros + " kilometros ");
    };
    return Persona;
}());
exports.Persona = Persona;
