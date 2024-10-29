function checarNumeros(n1, n2, n3) {
    if (n1 >= 50 && n1 <= 99 && n2 >= 50 && n2 <= 99 && n3 >= 50 && n3 <= 99) {
        console.log("Sucesso: Todos os números estão entre 50 e 99.");
    } else {
        console.log("Erro: Um ou mais números não estão no intervalo.");
    }
}

checarNumeros(55, 60, 70);