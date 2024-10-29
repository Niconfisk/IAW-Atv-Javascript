function contarOcorrencias(arr, elemento) {
    return arr.filter(item => item === elemento).length;
}

console.log(contarOcorrencias([1, 2, 3, 1, 2, 1], 1));