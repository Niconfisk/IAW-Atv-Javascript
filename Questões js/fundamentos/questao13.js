function mediaNumeros(arr) {
    let soma = arr.reduce((acc, num) => acc + num, 0);
    return soma / arr.length;
}

console.log(mediaNumeros([10, 20, 30, 40, 50]));