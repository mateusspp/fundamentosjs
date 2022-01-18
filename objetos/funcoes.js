// Desafio: Adicionar uma propriedade que permita "ações", para que os clientes que estão cadastrados consigam fazer operações bancárias.

const cliente = {
    nome:"André",
    idade:36,
    cpf:"12356478590",
    email:"andre@gmail.com",
    fones:["55913549851", "55748598745"],
    depedentes: [
    {
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    },
    {
        nome: "Samie Maria",
        parentesco: "filha",
        dataNasc: "04/01/2014"
    }
],
saldo: 100,
depositar:function(valor) {
    this.saldo += valor;
}
}

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);
