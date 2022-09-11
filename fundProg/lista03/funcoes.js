
function analisarResposta(){
    switch(sexo){
        case 'm':
        case "M":
            document.write('Masculino');
            break;
        case 'f':
        case 'F':
            document.write('Feminino');
            break;
        default:
            document.write("Valor não reconhecido.")
    }
}

function defineParImpar(){
    switch (num){
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
            document.write('Impar');
            break;
        case 2:
        case 4:
        case 6:
        case 8:
        case 10:
            document.write('Par');
            break;
        default:
            document.write('Valor não reconhecido ');
    }

}


function retornarParImpar(){
    var mod;
    mod = num % 2;
    switch (mod){
        case 1:
            document.write('Impar');
            break;
        case 0:
            document.write('Par');
            break;
        default:
            document.write('Valor  não reconhecido. ')
    }
}


function retornarConceito(){
    switch (true){
        case (media >= 0) && (media < 50):
            document.write('Insuficiência');
            break;
        case (media >= 50) && (media < 65):
            document.write('Regular');
            break;
        case (media >= 65) && (media < 85):
            document.write('Bom');
            break;
        case (media >= 85)  && (media <= 100):
            document.write('Ótimo');
            break;
        default:
            document.write("Média não reconhecida")
    }
}

function descobreOperacao(){
    switch (operacao){
        case "+":
            resultado = n1 + n2;
            document.write(n1 + "+" + n2 + "=" + resultado);
            break;
        case "-":
            resultado = n1 - n2;
            document.write(n1 + "-" + n2 + "=" + resultado);
            break;
        case "/":
            resultado = (n1 / n2);
            document.write(n1 + "/" + n2 + "=" + resultado);
            break;
        case "*":
            resultado = n1 * n2;
            document.write(n1 + "*" + n2 + "=" + resultado);
            break;
        default:
            document.write("Operação não reconhecida ");

    }

}