const container= document.querySelector('.container');
const button= document.querySelector('button').addEventListener('click', Invio);
let span = document.createElement('p');

let arrayNumbers = [];



function randomNumbers(){
    let number= Math.floor(Math.random() * 1000) + 1;
    arrayNumbers.push(number)
    return number;
}


function Invio(){
    //creazione numeri in pagina
    container.innerHTML=''
    let span = document.createElement('p');
    for(let i = 0; i < 5; i++){
        span = document.createElement('p');
        span.innerHTML= randomNumbers();
        container.appendChild(span);
    }
    //Rimozione elementi in pagina
    setTimeout(function(){
        container.innerHTML=''
    }, 10*1000)
    //Prompt per verifica numeri
    setTimeout(function(){
        let count = 0
        for(let k=0; k <= 5; k++){
            let promptValue = parseInt(prompt('Inserisci i numeri che ricordi'));
            function verificaNumeri(){
                if(arrayNumbers.includes(promptValue)){
                    return promptValue;
                }else{
                    return false;
                }
            }
            let result = verificaNumeri();
            if( result == promptValue ){
                console.log(promptValue)
                count += 1
            }
            document.querySelector('.container').innerHTML=`Hai indovinato ${count} numeri!`
        }
    }, 11*1000)

    
    
    console.log(arrayNumbers);
    
}