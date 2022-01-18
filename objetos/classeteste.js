// Exemplo de uma classe

class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar (valor) {
        this.saldo += valor
    }

    exibirSaldo () {
        console.log(this.saldo)
    }

}

const andre = new Cliente ("Andre", "andre@gmail.com", "78415748515", 100);
console.table(andre);
andre.exibirSaldo();