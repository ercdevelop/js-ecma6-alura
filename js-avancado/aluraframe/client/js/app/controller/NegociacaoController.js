class NegociacaoController {

    constructor(){
        
         let $ = document.querySelector.bind(document);
         
        this._inputData = $('#data');
        this._inputQtde = $('#quantidade');
        this._inputvalor = $('#valor');


    }


    adiciona(event){
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
        
 

}