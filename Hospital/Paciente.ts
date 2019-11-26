namespace Hospital{

    export class Paciente extends Pessoa{

        private _codPaciente:number;
    

             public getCodPaciente(){
            return this._codPaciente;
        }

        public setCodPaciente(codigo:number){
            this._codPaciente = codigo;
        }

     }
}