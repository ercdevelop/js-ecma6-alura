class Aluno {


    constructor(matricula, nome){
        this.matricula = matricula;
        this.nome = nome;
        Object.freeze(this);

    }


}