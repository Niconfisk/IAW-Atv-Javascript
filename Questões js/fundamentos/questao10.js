function converterNome(nomeCompleto) {
    let partes = nomeCompleto.split(' ');
    let sobrenome = partes.pop();
    let iniciais = partes.map(p => p.charAt(0).toUpperCase() + '.').join(' ');
    return `${iniciais} ${sobrenome}`;
}

console.log(converterNome("Nicolas Tavares"));