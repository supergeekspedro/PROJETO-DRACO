CREATE DATABASE draco;

\c draco;

CREATE TABLE postagem(
    usuario VARCHAR(50) NOT NULL,
    descricao TEXT NOT NULL
);

SELECT * FROM postagem;

INSERT INTO postagem VALUES('', '');