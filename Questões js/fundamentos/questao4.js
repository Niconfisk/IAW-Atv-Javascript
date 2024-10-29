function verificarNumeros(n1, n2) {
    return n1 === 30 || n2 === 30 || (n1 + n2 === 30) || (n1 === 12 && n2 === 12);
}

console.log(verificarNumeros(12, 12));