// Desafio: Adicionar dependentes p/ clientes cadastrados

const cliente = {
    nome:"André",
    idade:36,
    cpf:"12356478590",
    email:"andre@gmail.com",
    fones:["55913549851", "55748598745"]
}

cliente.depedentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente);

cliente.depedentes.nome = "Sara Connor";

console.log(cliente);