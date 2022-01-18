// Desafio: Percorrer um objeto, verificar se existe a chave "dependetes" e, caso exista, enviar uma mensagem de oferta de seguro.

const cliente = {
    nome:"André",
    idade:36,
    cpf:"12356478590",
    email:"andre@gmail.com",
    fones:["55913549851", "55748598745"],
    dependentes: [
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


function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.values(cliente));
oferecerSeguro(cliente);