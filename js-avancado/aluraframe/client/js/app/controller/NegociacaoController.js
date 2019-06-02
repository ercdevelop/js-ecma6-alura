class NegociacaoController {

    constructor(){
        
     let $ = document.querySelector.bind(document);
         
        this._inputData = $('#data');
        this._inputQtde = $('#quantidade');
        this._inputvalor = $('#valor');


    }


    adiciona2(event){
        event.preventDefault();
        
        let dataRpl = new Date(...this._inputData.
            value.split('-').map(function(numero, indice){
                if(indice ==1 ){
                        return numero -1;
                }
                return numero;

            })
        );

        console.log(dataRpl);

    }
         

    adiciona(event){
        event.preventDefault();

        let dataTratada = new Date(...this._inputData.value
                                        .split('-')
                                        .map((numero,indice) =>
                                          numero - indice%2 )
                                          );


        let negociacao = new Negociacao(dataTratada,this._inputQtde,this._inputvalor);

        console.log(negociacao.data);

    }

}