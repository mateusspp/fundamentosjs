// Exemplo com a atuação das três variáveis primitivas

const forma = "triângulo" ;
const altura = 5;
const comprimento = 7;
let area; 

if (forma === "quadrado") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);

// Esse exemplo, temos a const (valor imutável), let (pode ser mudado, mas deve ser declarado antes) e por fim, area dentro do if é uma var, fora é let, mas dentro do if
// por padrão, qualquer variável é var

console.log(typeof forma);