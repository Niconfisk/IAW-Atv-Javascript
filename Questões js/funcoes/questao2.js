function contarVC(frase) {
    let v = frase.match(/[aeiou]/gi)?.length || 0;
    let c = frase.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
    return { v, c };
}

console.log(contarVC("Exemplo de frase"));