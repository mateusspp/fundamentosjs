// Parâmetros de Função
// Nós passamos o num1 e num2 no parâmetro, ou seja, dentro das () após function, p/ especificar que a função smp irá receber dois números.
               
               //2   //4
function soma (num1, num2) {
    return num1 + num2;
};

            //função soma vai receber dois parâmetros, o primeiro e o segundo.
console.log(soma(2, 4));


// Ordem dos Parâmetros

function nomeIdade (nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log (nomeIdade("Pietro", 27));


// Eu coloquei = 1 nos parâmetros, p/ evitar erros de NaN, esse erro ocorre se a função receber apenas um parâmetro em vez de 2, além de evitar outros erros.
function multiplica (numero1 = 1, numero2 = 1){
    return numero1 * numero2;
};

console.log(multiplica (soma(4, 5), soma (3, 3)));