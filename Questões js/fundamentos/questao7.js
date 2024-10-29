function modificarFrase(frase) {
    return frase.split(' ').map(p => p.length < 5 ? p.toUpperCase() : p.toLowerCase()).join(' ');
}

console.log(modificarFrase("Esta é uma frase de exemplo"));