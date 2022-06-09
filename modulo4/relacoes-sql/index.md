1)
a) a chave entrageira é a FOREIGN KEY para ligar uma tabela na outra

b)
INSERT INTO Teste (id, comment, rate, movie_id) 
VALUES (
	"002",
    "Muito bom!",
    7,
	"002"
);
INSERT INTO Teste (id, comment, rate, movie_id) 
VALUES (
	"003",
    "Nota mil!",
    7,
	"001"
);
INSERT INTO Teste (id, comment, rate, movie_id) 
VALUES (
	"006",
    "Chato!",
    0,
	"003"
);
c)
INSERT INTO Teste (id, comment, rate, movie_id) 
VALUES (
	"002",
    "Muito bom ótimo!",
    7,
	"005"
);
d)
ALTER TABLE Movies DROP COLUMN evaluation;

e) 
ele não vai apagar nada porque eu exclui a coluna evaluation.
SET SQL_SAFE_UPDATES = 0;
DELETE FROM Movies WHERE name = "Doce de mãe";
ALTER TABLE Movies ADD evaluation FLOAT NOT NULL;
UPDATE Movies SET evaluation = 8 WHERE id = "003";
Exercício 2
CREATE TABLE MoviesCasts (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actors(id)
);

2)
SELECT * FROM MoviesCasts;

a)
 ele junta as tabelas de actor e movies criando uma nova tabela só com a coluna movie_id e actor_id.

b)
SELECT * FROM Actors;
INSERT INTO MoviesCasts(movie_id, actor_id)
VALUES(
	"001",
    "006"
);
INSERT INTO MoviesCasts(movie_id, actor_id)
VALUES(
	"002",
    "005"
);
INSERT INTO MoviesCasts(movie_id, actor_id)
VALUES(
	"003",
    "004"
);
INSERT INTO MoviesCasts(movie_id, actor_id)
VALUES(
	"004",
    "003"
);
INSERT INTO MoviesCasts(movie_id, actor_id)
VALUES(
	"005",
    "002"
);
INSERT INTO MoviesCasts(movie_id, actor_id)
VALUES(
	"006",
    "001"
);
c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails.
INSERT INTO MoviesCasts(movie_id, actor_id)
VALUES(
	"020",
    "0030"
);
d) ele não vai por estar relacionado.
SELECT * FROM MoviesCasts;

DELETE FROM Actors WHERE name = "Fernanda Montenegro";

3)

SELECT * FROM Movies 

INNER JOIN Rating ON Movies.id = Rating.movie_id;

a) a junção da onde tiver relações entre as tabelas

b)
SELECT m.id as movie_id, r.rate as rating FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;