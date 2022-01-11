// Exemplo de splice
                        //0        1
const listaDeChamada = ["João", "Juliana", "Ana", "Caio", "Lara", "Fabiana", "Camilo", "Renata", "Daisy"];

//listaDeChamada.splice(1, 2, "Pietro");
listaDeChamada.splice(2, 0, "Pietro");

console.log(`Lista de chamada: ${listaDeChamada}`);
