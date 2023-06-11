var batalhaModel = require("../models/batalhaModel");

var sessoes = [];
console.log("Controller do batalha");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var timeMin = req.body.timeMinServer;
    var timeSeg = req.body.timeSegServer;
    var pontuacao = req.body.pontuacaoServer;
    var baixas = req.body.baixasServer;
    var statusBatalha = req.body.statusBatalhaServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (timeMin == undefined) {
        res.status(400).send("Seu Minutos está undefined!");
    } else if (timeSeg == undefined) {
        res.status(400).send("Seu Segundos está undefined!");
    } else if (pontuacao == undefined) {
        res.status(400).send("Seu pontuação está undefined!");
    } else if (baixas == undefined) {
        res.status(400).send("Seu baixas está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Sua Fk está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo batalhaModel.js
        batalhaModel.cadastrar(timeMin,timeSeg,pontuacao,baixas,statusBatalha,fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function consultaGeral(req,res) {
    console.log("Estou na function do model")
        
        batalhaModel.consultaGeral()
            .then(
                function (resultadoQuizGeral) {
                    console.log(`\nResultados encontrados: ${resultadoQuizGeral.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoQuizGeral)}`); // transforma JSON em String

                    if (resultadoQuizGeral.length > 0) {
                        res.status(200).json(resultadoQuizGeral);
                        console.log("Achei:"+resultadoQuizGeral)
                    } else {
                        res.status(204).send("Nenhum resultado encontrado!")
                    }
                    console.log("Estou no método de consultaGeral");
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );

}


function consultaDesempenho(req,res) {
    console.log("Estou na function do model")
        var fk = req.body.fkServer;
        batalhaModel.consultaDesempenho(fk)
            .then(
                function (resultadoQuizGeral) {
                    console.log(`\nResultados encontrados: ${resultadoQuizGeral.length}`);
                    console.log(`Resultados ai papai: ${JSON.stringify(resultadoQuizGeral)}`); // transforma JSON em String

                    if (resultadoQuizGeral.length > 0) {
                        res.status(200).json(resultadoQuizGeral);
                        console.log("Achei:"+resultadoQuizGeral)
                    } else {
                        res.status(204).send("Nenhum resultado encontrado!")
                    }
                    console.log("Estou no método de consultaGeral");
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );

}

module.exports = {
    cadastrar,
    consultaGeral,
    consultaDesempenho,
}