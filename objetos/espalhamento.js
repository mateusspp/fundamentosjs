// Desafio: Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista única, para análise de outros departamentos do banco.

const clientes = [
    {
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
    },
    {
        nome:"Juliana",
        idade:25,
        cpf:"875125574852",
        email:"julia@gmail.com",
        fones:["5784514257", "40254715847"],
        depedentes: [
        {
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }
    ],
    }
]

const listaDependentes = [...clientes[0].depedentes, ...clientes[1].depedentes];

console.table(listaDependentes);