CREATE DATABASE individual;
USE individual;

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60),
email VARCHAR(60),
senha VARCHAR(60)
);
SELECT * FROM usuario;
CREATE TABLE quiz(
	id INT PRIMARY KEY AUTO_INCREMENT,
    acertos INT,
    erros INT,
    dataQuiz DATETIME,
    fkUsuario INT
);

CREATE TABLE batalha(
	id INT PRIMARY KEY AUTO_INCREMENT,
    tempoBatalha FLOAT,
    pontuacao INT,
    baixas INT,
    statusBatalha VARCHAR(50),
    fkUsuario INT,
    CONSTRAINT fkUsuarioBatalha FOREIGN KEY(fkUsuario) REFERENCES usuario(id)
);
SELECT * FROM batalha;
INSERT INTO batalha(tempoBatalha,pontuacao,baixas,statusBatalha,fkUsuario) VALUES
	(1.35,4,3,'Vencedor',1);

ALTER TABLE quiz ADD CONSTRAINT fkUsuarioQuiz FOREIGN KEY(fkUsuario) REFERENCES usuario(id);
SELECT * FROM quiz JOIN usuario ON usuario.id = fkUsuario;

INSERT INTO quiz VALUES(NULL,3,4,now(),1);

SELECT  fkUsuario,nome,acertos FROM quiz JOIN usuario ON usuario.id = fkUsuario ORDER BY acertos DESC LIMIT 5;

SELECT dataQuiz,acertos FROM quiz WHERE fkUsuario = 3;

SELECT * FROM usuario JOIN quiz ON fkUsuario = usuario.id;

SELECT dataQuiz,acertos,erros FROM quiz WHERE fkUsuario = 3;

SELECT nome, SUM(acertos),SUM(erros) FROM quiz JOIN usuario ON usuario.id = fkUsuario group by fkUsuario;

SELECT batalha.id AS idBatalha,pontuacao,baixas,tempoBatalha,nome FROM batalha JOIN usuario ON fkUsuario = usuario.id WHERE statusBatalha = 'Vencedor' 
ORDER BY pontuacao DESC ,tempoBatalha, baixas LIMIT 5;

SELECT * FROM quiz;

 SELECT fkUsuario,batalha.id AS idBatalha,pontuacao,baixas,tempoBatalha,nome,statusBatalha FROM batalha JOIN usuario ON fkUsuario = usuario.id WHERE fkUsuario = 1;
