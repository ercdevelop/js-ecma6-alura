class NegociacaoController {

    constructor(){
        
     let $ = document.querySelector.bind(document);
         
        this._inputData = $('#data');
        this._inputQtde = $('#quantidade');
        this._inputvalor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
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
 
        this._listaNegociacoes.adiciona(this._criaNegocicao());

        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes);

    }

    _criaNegocicao(){

        return  new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQtde.value,
            this._inputvalor.value);

    }

    _limpaFormulario(){

        this._inputData.value = '';
        this._inputQtde.value = 1;
        this._inputvalor.value = 0.0

        this._inputData.focus();

        

    }

}