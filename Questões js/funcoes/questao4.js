function ehPalindromo(str) {
    let strLimpa = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return strLimpa === strLimpa.split('').reverse().join('');
}

console.log(ehPalindromo("A man, a plan, a canal: Panama"));