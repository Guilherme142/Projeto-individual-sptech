var database = require("../database/config")
console.log("Model do batalha");

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(timeMin,timeSeg,pontuacao,baixas,statusBatalha,fkUsuario) {
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO batalha(tempoBatalha,pontuacao,baixas,statusBatalha,fkUsuario) VALUES
        (${timeMin}.${timeSeg},${pontuacao},${baixas},'${statusBatalha}',${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function consultaGeral() {
    
    var instrucao = `
        SELECT batalha.id AS idBatalha,pontuacao,baixas,tempoBatalha,nome FROM batalha JOIN usuario ON fkUsuario = usuario.id WHERE statusBatalha = 'Vencedor' 
        ORDER BY pontuacao DESC ,tempoBatalha, baixas LIMIT 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function consultaDesempenho(fk) {
    
    var instrucao = `
        SELECT fkUsuario,batalha.id AS idBatalha,pontuacao,baixas,tempoBatalha,nome,statusBatalha FROM batalha JOIN usuario ON fkUsuario = usuario.id WHERE fkUsuario = '${fk}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    cadastrar,
    consultaGeral,
    consultaDesempenho
};