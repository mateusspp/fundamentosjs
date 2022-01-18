// Desafio: Lista de telefones = acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimi-la, 
// verificando se há mais de um número em algum cadastro.

const cliente = {
    nome:"André",
    idade:36,
    cpf:"12356478590",
    email:"andre@gmail.com",
    fones:["55913549851", "55748598745"]
}

cliente.fones.forEach(fone => console.log(fone));