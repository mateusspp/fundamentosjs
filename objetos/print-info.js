// Exemplo de seleção de informações de um objeto e print das mesmas

const cliente = {
    nome:"André",
    idade:36,
    cpf:"12356478590",
    email:"andre@gmail.com"
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);
console.log(cliente.cpf.substring(0,3));