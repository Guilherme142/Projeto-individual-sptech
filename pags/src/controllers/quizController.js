var usuarioModel = require("../models/quizModel");

var sessoes = [];
console.log("Controller do quiz");
function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consultaGeral! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (acertos == undefined) {
        res.status(400).send("Seu Acertos está undefined!");
    } else if (erros == undefined) {
        res.status(400).send("Seu Erros está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Sua Fk está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(acertos, erros, fkUsuario)
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
        
        usuarioModel.consultaGeral()
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
    var fk = req.body.fkServer;
    console.log("Estou na function do model e essa é a var : "+fk)
        
        usuarioModel.consultaDesempenho(fk)
            .then(
                function (resultadoQuizDesempenho) {
                    console.log(`\nResultados encontrados: ${resultadoQuizDesempenho.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoQuizDesempenho)}`); // transforma JSON em String

                    if (resultadoQuizDesempenho.length > 0) {
                        res.status(200).json(resultadoQuizDesempenho);
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
    entrar,
    cadastrar,
    listar,
    testar,
    consultaGeral,
    consultaDesempenho,
}