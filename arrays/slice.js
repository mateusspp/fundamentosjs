// Exemplo de divisão com slice

const nomes = ["João", "Juliana", "Ana", "Caio", "Lara", "Fabiana", "Camilo", "Renata", "Daisy"];

console.log("tamanho da array:", nomes.length)
                         //0, 10
const sala1 = nomes.slice(0, nomes.length/2);
                         //10
const sala2 = nomes.slice(nomes.length/2);

console.log(`"Alunos da sala 1:" ${sala1}`);
console.log(`"Alunos da sala 1:" ${sala2}`);