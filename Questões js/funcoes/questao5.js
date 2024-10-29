function gerarNumerosAleatorios(qtd, min, max) {
    let numeros = [];
    for (let i = 0; i < qtd; i++) {
        numeros.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numeros;
}

console.log(gerarNumerosAleatorios(5, 1, 100));