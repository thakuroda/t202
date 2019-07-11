// While(condição){
//    codigo a ser repetido enquanto a condicao for verdadeira
// }

let signos = ['áries', 'touro', 'gêmeos', 'câncer', 'leão', 'virgem', 'libra', 'escorpião', 'sargitário', 'capricórnio', 'aquário', 'peixes']
let contador = 0;

//-------------------------Exemplo com While-------------------------------------------------------------------------
console.log("EXEMPLO COM WHILE")

while (contador < 12){
    console.log(signos [contador]);
    // contador = contador +1;
    // contador += contador;
    contador++;    
}
//-------------------------Exemplo com For---------------------------------------------------------------------------
// for (inicio; fim; passo){
// }
console.log("EXEMPLO COM FOR")

for (let cont = 0; cont < signos.length; cont++) {
    console.log(signos[cont]);
    
}


// While é melhor para casos em que não se tenha o número exato de vezes ou tamanho (listas, etc){
// }


let idade = Number(prompt("Digite a sua idade"));
while (isNaN(Number)){
    alert("Digite um número");
    idade = Number (prompt("digite a sua idade"));

}

// ---------For é melhor para casos que se tenha o número exato de vezes ou tamanho (listas, etc){ --------
// }

for (let i in signos){
    console.log(signos [i]);
}

for (let signo of signos){
    console.log(signo);


}
