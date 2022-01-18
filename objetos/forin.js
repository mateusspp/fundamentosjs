// Desafio: Percorrer um objeto e extrair informações do cliente em um formato mais legível e de forma automatizada p/ fornecer a outros departamentos do banco.

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

let relatorio = "";

for (let info in cliente){
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    } else {
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }     
}

console.log(relatorio)