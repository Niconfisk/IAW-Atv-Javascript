let d = new Date();
let dia = d.toLocaleString('pt-BR', { weekday: 'long' });
let h = d.toTimeString().split(' ')[0];

console.log(`Hoje é: ${dia}.`);
console.log(`A hora atual é: ${h}.`);