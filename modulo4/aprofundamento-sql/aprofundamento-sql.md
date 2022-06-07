### Exercício 1

a)
ALTER TABLE = alterar a estrutura de uma tabela já existente nesse caso a Actor.
DROP COLUMN = remove colunas e também você pode escolher uma
coluna específica nesse caso irá excluir a coluba salary .


b)
ALTER TABLE = alterar a estrutura de uma tabela já existente nesse caso a Actor.
CHANGE = serve para renomear uma coluna, nesse caso altera o nome "gender" para "sex".
VARCHAR(6) = aceita 6 caracteres de texto (string).


c)
ALTER TABLE = alterar a estrutura de uma tabela já existente nesse caso a Actor.
CHANGE = serve para renomear uma coluna, nesse caso mantem o mesmo nome "gender".
VARCHAR(6) = aceita 255 caracteres de texto (string).


d) 
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2
a) 
```
UPDATE Actor
SET 
	birth_date = "2001-02-08", 
	name =  "Gina Moreira"
WHERE id = "003";
```

b) 
```
UPDATE Actor
SET  name =  "JULIANA PAES"
WHERE id = "003";
```

```
UPDATE Actor
SET  name =  "Juliana Paes"
WHERE id = "003";
```

c) 
```
UPDATE Actor
SET 
	birth_date = "1999-08-15", 
	name =  "Mc Ludimila", 
	salary = 100000, 
	gender = "female"
WHERE id = "005";
```

d)
coluna não foi encontrada

```
UPDATE Actor
SET nome =  "JULIANA PÃES"
WHERE id = "020";
```

### Exercício 3
a) 
```
SET SQL_SAFE_UPDATES = 0;
```

```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b) 
```
DELETE FROM Actor WHERE 
gender = "male" AND 
salary < 1000000;
```

### Exercício 4
```
SELECT COUNT(*) FROM Actor;
```

```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

```
SELECT AVG(salary) FROM Actor;
```

a) 
```
SELECT MAX(salary) FROM Actor;
```

b) 
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c) 
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d) 
```
SELECT SUM(salary) FROM Actor;
```

### Exercício 5
```
SELECT * FROM Actor LIMIT 3;
```

```
SELECT * FROM Actor ORDER BY name ASC;
```

```
SELECT * FROM Actor ORDER BY name ASC LIMIT 4;
```
```
SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4;
```

```
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```

a) 
conta a quantidade por gender.


b)
```
SELECT id, name FROM Actor ORDER BY name DESC;
```

c)
```
SELECT * FROM Actor ORDER BY salary;
```

d)
```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

e) 
```
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

### Exercício 6
a)
```
SELECT * FROM Movie;
```

```
ALTER TABLE Movie ADD playing_limit_date DATE;
```

b) 
```
ALTER TABLE Movie CHANGE evaluation evaluation FLOAT;
```

c) 
```
UPDATE Movie
SET
	playing_limit_date = "2022-12-31"
WHERE id = "001";
```

```
UPDATE Movie
SET
	playing_limit_date = "2021-01-01"
WHERE id = "002";
```

d)
```
SET SQL_SAFE_UPDATES = 0;
```

```
DELETE FROM Movie WHERE id = "003";
```