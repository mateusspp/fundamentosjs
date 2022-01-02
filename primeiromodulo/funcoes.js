// 1) Declaração da função (série de comandos que fazem algo), lembra uma enzima.
                   
         //nome da função
                      //paramêtro é string
function imprimeTexto (texto){
    console.log(texto)
}


// 1) Executa a função:
imprimeTexto("oi");
imprimeTexto("outro texto");


// Existem três formas de escrever funções


function soma (){
    return 2 + 2;
};

console.log(soma());


// O JavaScript executa a função soma, após executar, ele leva o dado p/ a função ImprimeTexto, a função recebe esse paramêtro e executa o mesmo, este que foi vindo de uma função.
// imprimeTexto(soma());
