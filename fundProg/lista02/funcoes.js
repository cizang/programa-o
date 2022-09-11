function calcularArea(){
    area = (base *   altura) / 2;

}

function reajustarSalario(){
    reaj = salBase * 0.128;
    salReaj = salBase + reaj;

}

function calcularTaxaIlum(){
    taxaIlum = (kwatt * 0.41) *  0.03;
}


function calcularFaturaFinal(){
    fatura = (kwatt * 0.41) + taxaIlum + taxaMan;
}


function calcularSalaricaloFinal(){
    inss = salBruto * 0.05;
    ir = salBruto * 0.07;
    auxAl = salBruto  * 0.08;
    salLiquido = salBruto - inss - ir - auxAl;
}

function calculaLucro(){
    lucro = (precoVenda - precoCusto ) * qtd
}

function calculaAlturaP(){
    alturaPredio = alturaAnd * qtdAndares; 
}

function calculaDias(){
    anos = 365 * anos;
    meses = meses * 30;
    diasVividos = anos + meses + dias 
}

function consorcio(){
    totalPago = qtdPrestacoesP * valorPrestacao;
    saldoDevedor = totalPrestacoes - (qtdPrestacoesP * valorPrestacao);

}


function calculaTempC(){
    tempC = (tempF-32) * (5/9);
}


function calculaTempF(){
    tempF = (9/5) * tempC + 32;
}

function calculaVolume(){
    volume = comprimento * largura * altura;
}

function calculaTroca(){
    c = a;
    a = b
    b = c;
}

function media(){
    media = ((nota1 * 2 ) + (nota2 * 3)  +  (nota3 * 1) + (nota4 * 4)) /  (1+2+3+4)    
}

function calculaDesconto(){
    if(valorCompra >= 5000){
        valorDesconto = valorCompra * 0.20;
        compraComD = valorCompra - valorDesconto;
    }else{
        valorDesconto = valorCompra * 0.15;
        compraComD = valorCompra - valorDesconto;
    }
}

function calculaPesoIdeal(){
    if(sexo == "feminino"){
        pesoIdeal = 72.7 *  altura - 58   
    }else{
        pesoIdeal = 62.1 * altura - 44.7
    }
}

function calculaParImpar(){
    if(n % 2 == 0){
        resultado = "par";
    }else{
        resultado = "impar";
    }
}

function calculaDiferenca(){
    if(n1 <= n2){
        n2 = Number(prompt("Informe um valor menor que o primeiro: "));
    }
    dif = n1 - n2;
}


function verificaNumero(){
    if(numero > 0){
        resultado = "positivo";
    }else{
        if(numero < 0){
            resultado = "negativo";
        }else{
            resultado = " É nulo";
        }
    }
}

function verificaMaior(){
    while(n1 == n2){
            n2 = Number(prompt("Informe outro valor para n2: "))
        if(n2 > maior){
            maior = n2;
        }
    }
}

function  calculaQuadradoDif(){
    while( b < a ){
        b = Number(prompt("Informe um valor para b: "));
        resultado = (a - b ) * (a - b);
    }
}

function calculaMaior(){
    if ( n1 > maior ){
            maior = n1;
    }else{
        if (n2> maior){
             maior = n2;
            if(n3 > maior ){
                maior = n3;
           }
        }else{
           if(n3 > maior ){
                maior = n3;
           }
        }  
    }
}
    

