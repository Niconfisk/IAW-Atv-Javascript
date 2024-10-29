function invNum(n) {
    return Number(String(n).split('').reverse().join(''));
}

console.log(invNum(12356));