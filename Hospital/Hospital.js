var Hospital;
(function (Hospital_1) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this._enfermeiros = [];
            this._medicos = [];
            this._pacientes = [];
        }
        Hospital.prototype.getNome = function () {
            return this._nome;
        };
        Hospital.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Hospital.prototype.getEnfermeiro = function () {
            return this._enfermeiros;
        };
        Hospital.prototype.addEnfermeiro = function (enfermeiro) {
            this._enfermeiros.push(enfermeiro);
        };
        Hospital.prototype.getMedico = function () {
            return this._medicos;
        };
        Hospital.prototype.addMedico = function (medico) {
            this._medicos.push(medico);
        };
        Hospital.prototype.getPaciente = function () {
            return this._pacientes;
        };
        Hospital.prototype.addPaciente = function (paciente) {
            this._pacientes.push(paciente);
        };
        return Hospital;
    }());
    Hospital_1.Hospital = Hospital;
})(Hospital || (Hospital = {}));
