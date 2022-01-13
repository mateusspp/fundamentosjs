// Exemplo de procura na lista

const alunos = ["João","Juliana" ,"Caio" ,"Ana"];

const mediaDosAlunos = [10, 7, 9, 6];
                            //0        1
let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

//includes -> booleano
// indeOf -> Número

//Criamos uma função, em arrow function
const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
                                //[0][3]
        return listaDeNotasEAlunos[0][indice] + `, sua média é ${listaDeNotasEAlunos[1][indice]}.`;
    } else {
        return "Aluno não está cadastrado.";
    }
}

console.log(exibeNomeNota("Pietro"));

//let indice foi criada p/ salvar