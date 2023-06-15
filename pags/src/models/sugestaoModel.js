var database = require("../database/config")
console.log("Sugestao Model")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(descricao,fk) {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO sugestao (descricao, fkUsuario) VALUES ('${descricao}', '${fk}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function consultar(fk) {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    SELECT email, descricao , fkUsuario FROM sugestao JOIN usuario ON fkUsuario = usuario.id  WHERE fkUsuario ='${fk}';

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function consultaGeral() {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    SELECT email, descricao , fkUsuario FROM sugestao JOIN usuario ON fkUsuario = usuario.id ;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    cadastrar,
    consultaGeral,
    consultar
};