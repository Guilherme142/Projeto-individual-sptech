var express = require("express");
var router = express.Router();
console.log("Routes do quiz");
var quizController = require("../controllers/quizController");

router.get("/", function (req, res) {
    quizController.testar(req, res);
});

router.get("/listar", function (req, res) {
    quizController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    quizController.entrar(req, res);
});

router.post("/consultar", function (req, res) {
    quizController.consultaGeral(req, res);
});
router.post("/consultarDesempenho", function (req, res) {
    quizController.consultaDesempenho(req, res);
});

module.exports = router;