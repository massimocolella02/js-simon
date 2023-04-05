//bottone
document.querySelector('button').addEventListener('click', function(){
    
    //Creazione 5 numeri random
    let arrayNumbers = []
    for( let i=0; arrayNumbers.length < 5; i++){
        let numero = randomNumbers();
        if(!arrayNumbers.includes(numero)){
            arrayNumbers.push(numero);
            document.querySelector('.container').innerHTML+=`<p>${numero}</p>`;
        }
    }

    //Timer per far sparire i numeri
    setTimeout(function(){
        document.querySelector('.container').innerHTML='';
    } , 10000)

    //Timer per far comparire il prompt
    let numeri_Utente = []
    setTimeout( function(){
        for(let k=0; numeri_Utente.length < 5; k++){
            let numeroUtente =  parseInt(prompt('Inserisci i numeri che ricordi'));
            if(!numeri_Utente.includes(numeroUtente)){
                numeri_Utente.push(numeroUtente)
            }
        }
        
        //Verifica numeri
        let numeri_Indovinati = []
        for(let x= 0; x < 5; x++){
            if(arrayNumbers.includes(numeri_Utente[x])){
                numeri_Indovinati.push(numeri_Utente[x])
            }
        }
        console.log(numeri_Indovinati, numeri_Indovinati.length)
    }, 10100)
    
})

function randomNumbers(){
    return Math.floor(Math.random() * 100) + 1
}

