var sugestaoModel = require("../models/sugestaoModel");

var sessoes = [];
console.log("SUGESTAO CONTROLLER")
function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var desc = req.body.descServer;
    var fk = req.body.fkServer;
    
    if (desc == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (fk == undefined) {
        res.status(400).send("Seu email está undefined!");
    }else {
        
        // Passe os valores como parâmetro e vá para o arquivo sugestaoModel.js
        sugestaoModel.cadastrar(desc,fk)
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


function consultar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var fk = req.body.fkServer;
    
    if (fk == undefined) {
        res.status(400).send("Seu email está undefined!");
    }else {
        
        // Passe os valores como parâmetro e vá para o arquivo sugestaoModel.js
        sugestaoModel.consultar(fk)
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


function consultaGeral(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

  
        
        // Passe os valores como parâmetro e vá para o arquivo sugestaoModel.js
        sugestaoModel.consultaGeral()
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

module.exports = {
    cadastrar,
    testar,
    consultaGeral,
    consultar
}