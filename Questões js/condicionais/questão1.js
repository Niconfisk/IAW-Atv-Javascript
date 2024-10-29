function cmpNum(n1, n2) {
    if (n1 % 2 !== 0) return n1;
    if (n2 % 2 !== 0) return n2;
    return Math.max(n1, n2);
}

console.log(cmpNum(5, 10));