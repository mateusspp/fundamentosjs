function apresentar (nome) {
    return `meu nome é ${nome}`;
}

//Como é apenas uma linha, não é necessário abrir chaves p/ ter return
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//Arrow function com + de 1 linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "somente números de 1 a 9"
    } else {
        return num1 + num2
    }
}

//Hoisting: arrow function se comporta como expressão