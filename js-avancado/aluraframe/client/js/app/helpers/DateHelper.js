class DateHelper{

    constructor(){
        throw new Error('Essa classe não pode ser instânciada');
    }

   static textoParaData(texto){

    if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
        throw new Error('Deve estar no formato aaaa-mm-dd');
    }

        let dataTratada = new Date(...texto
            .split('-')
            .map((numero,indice) =>
            numero - indice%2 )
              );
        return dataTratada; 
    
    }

    static textoParaDataFunc(texto){

        let dataArray = [texto.split(',')];

        for( i =0 ; i<= dataArray.length(); i++) {
                if (i == 1){
                    dataArray[i] -= 1;
                }

        }
        
        return new Date(...dataArray);
    
    }

    static dataParaTexto(data){

        let dataFormatada = data.getDay()
        + '/' + (data.getMonth() +1)
        + '/' + data.getFullYear();

        return dataFormatada;
        
    }

    static dataTextoStrTemp(data){

        return `${data.getDay()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

}