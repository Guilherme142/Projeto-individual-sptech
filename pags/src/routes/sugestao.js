var express = require("express");
var router = express.Router();
console.log("ROUTE SUGESTAO")
var sugestaoController = require("../controllers/sugestaoController");

router.get("/", function (req, res) {
    sugestaoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    sugestaoController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de sugestaoController.js
router.post("/cadastrar/", function (req, res) {
    sugestaoController.cadastrar(req, res);
})

router.post("/consultar", function (req, res) {
    sugestaoController.consultar(req, res);
});

router.post("/consultaGeral", function (req, res) {
    sugestaoController.consultaGeral(req, res);
});
module.exports = router;