class NegociacaoController {

    constructor(){
        
         let $ = document.querySelector.bind(document);
         
        this._inputData = $('#data');
        this._inputQtde = $('#quantidade');
        this._inputvalor = $('#valor');


    }


    adiciona(event){
        event.preventDefault();
        
        //com split
        //let data = new Date(this._inputData.value.split('-'));

        //com expressão regular
        let data = new Date(this._inputData.value.replace(/-/g,','));

        console.log(data);
    }
        

}