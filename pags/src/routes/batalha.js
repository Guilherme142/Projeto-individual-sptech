var express = require("express");
var router = express.Router();
console.log("Routes do batalha");
var batalhaController = require("../controllers/batalhaController");

router.get("/", function (req, res) {
    batalhaController.testar(req, res);
});

router.get("/listar", function (req, res) {
    batalhaController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de batalhaController.js
router.post("/cadastrar", function (req, res) {
    batalhaController.cadastrar(req, res);
})

router.post("/consultar", function (req, res) {
    batalhaController.consultaGeral(req, res);
});

router.post("/consultarDesempenho", function (req, res) {
    batalhaController.consultaDesempenho(req, res);
});

module.exports = router;