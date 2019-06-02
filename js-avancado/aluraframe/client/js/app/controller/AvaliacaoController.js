class AvaliacaoController {

    constructor(){
         
        let $ = document.querySelector.bind(document);
         
        this._inputData = $('#submit');

    }



    criarAvaliacoes(event){
        event.preventDefault();
        let avaliacao =  [
            new Prova(new Aluno(1,'Luana'),6),
            new Prova(new Aluno(2,'Cassio'), 8),
            new Prova(new Aluno(3,'Renato'),10),
            new Prova(new Aluno(4,'Bira'),5)

        ];
       

        let avaliacaoFilter = avaliacao.
                            filter((prova)=> prova.nota >= 7).
                            map((prova) => prova.aluno.nome);

        console.log(avaliacaoFilter);

    }




}