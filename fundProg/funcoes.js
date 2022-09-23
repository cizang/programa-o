function somar(){
    soma = soma + n;    
}

function calcularMedia(){
    media = soma / (i-1);
}

function descobreMaior(){
    if(i === 1){
        maior = n;
    } 
    if(n > maior){
        maior = n;
    }        
}

function descobreMenor(){
    if(i == 1){
        menor = n;
    }
    if(n < menor){
        menor = n;
    }
}

function qtdPares(){
   if(n % 2 == 0){
    contaPares = contaPares + 1;
   }
}

function qtdImpares(){
    if(n % 2 != 0){
        contaImpares = contaImpares + 1;
    }
}