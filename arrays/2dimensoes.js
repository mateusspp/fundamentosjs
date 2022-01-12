// Exemplo de lista de duas dimensões

const alunos = ["João","Juliana" ,"Caio" ,"Ana"];

const mediaDosAlunos = [10, 7, 9, 6];
                            //0        1
let listaDeNotasEAlunos = [alunos, mediaDosAlunos];
// let listaDeAlunos = [[João","Juliana" ,"Caio" ,"Ana"], [10, 7, 9, 6]];

console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`);