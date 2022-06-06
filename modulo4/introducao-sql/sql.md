### Exercício 1
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);


VARCHAR - uma string de no máximo 255 caracteres;
DATE NOT NULL - data de nascimento;
PRIMARY KEY - chave primária;


SHOW DATABASES;
SHOW TABLES;

b) mostra tabelas e seus conteúdos;


DESCRIBE Actor;

c) mostra a extrutura da tabela e seus campos;


### Exercício 2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Carlise Debona",
  2000000,
  "1990-11-14", 
  "female"
);

b) Erro 1062 Duplicado entrada '002' para chave 'PRIMARY' .


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

c) Erro 1136. Está faltando as colunas birth_date, gender. 
Todas as colunas precisam ser declaradas.


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005",
  "Dj Alok",
  400000,
  "1949-04-18", 
  "male"
);

d) Erro 1364. O campo 'name' não possui um valor padrão.


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Juliana Paes",
  71933333,
  "1979-03-26", 
  "female"
);

e) Erro 1292. Valor de data incorreto : '1950' para a coluna 'birth_date'.


f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Caio Castro",
  300000,
  "1989-10-19", 
  "male"
);

### Exercício 3
```
SELECT id, salary from Actor;
```
```
SELECT id, name from Actor WHERE gender = "male";
```
a)
```
SELECT *  from Actor WHERE gender = "female";
```
```
SELECT Actor  from Actor;
```
b)
```
SELECT id, salary from Actor WHERE name = "Tony Ramos";
```
c) 0 linhas retornadas. A query é:
```
SELECT * from Actor WHERE gender = "invalid";
```
d) 0 linhas retornadas. A query é:
```
SELECT id, name, salary from Actor WHERE salary < 500000;
```

e) erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'. Nome não existe é name. A query é:
```
SELECT id, name from Actor WHERE id = "002";
```
```
SELECT * from Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```
### Exercício 4
a) mostra todos os dados dos nomes que começam com A ou J com saláro a cima de 300000.

b)
```
SELECT * from Actor WHERE name NOT LIKE "A%"  AND salary > 350000;
```

c)
```
SELECT * from Actor WHERE (name LIKE "%G%" OR name LIKE "%g%");
```

d)
```
SELECT * FROM Actor 
WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") 
AND salary BETWEEN 350000 AND 900000 ;
```
### Exercício 5
a)O TEXT  é a família de tipo de coluna destinada ao armazenamento de caracteres de 
alta capacidade.

CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT,
    release_of_date DATE NOT NULL,
    evaluation FLOAT NOT NULL
);

b)
INSERT INTO Movie (id, name, synopsis, release_of_date, evaluation)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

c)
INSERT INTO Movie (id, name, synopsis, release_of_date, evaluation)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

d)
INSERT INTO Movie (id, name, synopsis, release_of_date, evaluation)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
que só quer saber de farras e jogatina nas boates. A vida de abusos 
acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

e)
INSERT INTO Movie (id, name, synopsis, release_of_date, evaluation)
VALUES(
"004",
"Dois Filhos de Franscisco",
"Francisco é um lavrador do interior de Goiás que sonha transformar seus dois filhos, 
Mirosmar e Emival, em uma famosa dupla sertaneja. Em meio a muitos percalços, 
um empresário consegue fazer deles um sucesso no interior do Brasil, 
até que um acidente interrompe a carreira da dupla. Anos mais tarde, Mirosmar 
transforma-se em Zezé Di Camargo, mas a fama só chega quando ele se junta 
ao irmão Welson (Luciano), o parceiro perfeito para concretizar a profecia de seu pai.",
"2005-08-19",
8
);

### Exercício 6
a)
```
SELECT id, name, evaluation  from Movie WHERE id = "002";
```

b)
```
SELECT name  from Movie WHERE name = "Dois Filhos de Franscisco";
```

c)
```
SELECT id, name, synopsis  from Movie WHERE evaluation >= 7;
```

### Exercício 7
a)
```
SELECT * from Movie WHERE name LIKE "%vida%";
```

b)
``
SELECT * from Movie WHERE name LIKE "%sucesso%" OR synopsis LIKE "%sucesso%";
``

c)
``
SELECT * from Movie WHERE release_of_date < "2017-11-02";
``

d)A 
``
SELECT * from Movie WHERE (name LIKE "%vida%" OR synopsis LIKE "%vida%" AND evaluation > 7);
``