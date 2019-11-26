namespace Hospital{

    export class Enfermeiro extends Funcionario{
        private _coren:number;

         public getCoren(){
            return this._coren;
        }

        public setCoren(coren:number){
            this._coren = coren;
        }

        
    }
}