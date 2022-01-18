// Desafio: Verfiicar a melhor forma de agregar a informação de um novo depedente ao objeto Cliente.

const cliente = {
    nome:"André",
    idade:36,
    cpf:"12356478590",
    email:"andre@gmail.com",
    fones:["55913549851", "55748598745"],
    depedentes: [{
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"}]
    
}


cliente.depedentes.push(
    {
        nome: "Samie Maria",
        parentesco: "filha",
        dataNasc: "04/01/2014"
    }
)

console.log(cliente);

const filhaMaisNova = cliente.depedentes.filter(dependente => dependente.dataNasc === "04/01/2014");

console.log(filhaMaisNova[0].nome);