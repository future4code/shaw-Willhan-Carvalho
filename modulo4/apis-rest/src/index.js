"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Data_1 = require("./Data");
//Starting configs >>>>>>
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Ending configs <<<<<<
//      EXERCÍCIOS
//  Exercício 1
//  a) O método HTTP a ser usado é o 'get'.
//  b) A entidade é 'user' ou 'users', posto que retorna usuários.
app.get('/users', (req, res) => {
    try {
        res.send(Data_1.users);
    }
    catch (error) {
        res.status(500).send('Undefined error.');
    }
});
//  Exercício 2
//  a) Os parâmetros são passados via 'query' porque se trata de uma busca. 
//  b) Para que apenas 'types' válidos sem utilizados criei um 'enum' e restringi as buscas àqueles valores.
app.get('/search/types', (req, res) => {
    try {
        const type = req.query.type;
        const filteredUsers = Data_1.users.filter((u) => {
            return u.type === type.toUpperCase();
        });
        if (!type) {
            throw new Error('Please, verify input: no values were identified.');
        }
        ;
        if (type.toUpperCase() !== Data_1.types.ADMIN && type.toUpperCase() !== Data_1.types.NORMAL) {
            throw new Error('Please, verify input: values must to be "Admin" or "Normal".');
        }
        ;
        res.send(filteredUsers);
    }
    catch (error) {
        switch (error.message) {
            case 'Please, verify input: no values were identified.':
                res.status(422);
                break;
            case 'Please, verify input: values must to be "Admin" or "Normal".':
                res.status(422);
                break;
            default:
                res.status(500);
        }
        res.send(error.message);
    }
});
//  Eexercício 3
//  a) Os parâmetros são passados via 'query' porque se trata de uma busca. 
//  b) Incluso no código abaixo.
app.get('/search/name', (req, res) => {
    try {
        const name = req.query.name;
        const filteredUsers = Data_1.users.filter((u) => {
            return u.name.toLocaleLowerCase() === name.toLocaleLowerCase();
        });
        if (!name) {
            throw new Error('Please verify input: no values were found.');
        }
        ;
        if (filteredUsers.length === 0) {
            throw new Error('User not found.');
        }
        res.send(filteredUsers);
    }
    catch (error) {
        switch (error.message) {
            case 'Please verify input: no values were found.':
                res.status(422);
                break;
            case 'User not found.':
                res.status(404);
                break;
            default:
                res.status(500);
        }
        res.send(error.message);
    }
});
//  Exercício 4
//  a) Nada mudou.
//  b) Não o considero como ideal, ainda que funcione, porque o dedicaria às mudanças de dados já existentes somente.
app.post('/users', (req, res) => {
    try {
        const { name, email, type, age } = req.body;
        if (!name || !email || !type || !age) {
            throw new Error('Please verify inputs. Missing values.');
        }
        ;
        if (name.length < 2 || email.length < 5 || type.length < 4 || age < 1) {
            throw new Error('Please verify inputs. One or more parameters are missing.');
        }
        ;
        if (typeof name !== typeof "alpha" || typeof email !== typeof "alpha") {
            throw new Error('Please, verify inputs: "name", "email" and "type" must to be string.');
        }
        ;
        if (type.toUpperCase() !== Data_1.types.ADMIN && type.toUpperCase() !== Data_1.types.NORMAL) {
            throw new Error('Please, verify "type" input: values must to be "Admin" or "Normal".');
        }
        ;
        if (typeof age !== typeof 1) {
            throw new Error('Verify input "age": must to be number.');
        }
        ;
        Data_1.users.push({
            id: Data_1.users.length + 1,
            name,
            email,
            type,
            age
        });
        res.send(Data_1.users);
    }
    catch (error) {
        switch (error.message) {
            case 'Please verify inputs. Missing values.':
                res.status(422);
                break;
            case 'Please verify inputs. One or more parameters are missing.':
                res.status(422);
                break;
            case 'Please, verify type of "name": must to be string.':
                res.status(422);
                break;
            case 'Please, verify "type" input: values must to be "Admin" or "Normal".':
                res.status(422);
                break;
            case 'Verify input "age": must to be number.':
                res.status(422);
                break;
            default:
                res.status(500);
        }
        res.send(error.message);
    }
});
//Exercício 5
app.put('/users/:id', (req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, email, type, age } = req.body;
        let isUser = false;
        if (id < 0) {
            throw new Error('Please verify inputs: ID must to be a number.');
        }
        if (!name || !email || !type || !age) {
            throw new Error('Please verify inputs. Missing values.');
        }
        ;
        if (name.length < 2 || email.length < 5 || type.length < 4 || age < 1) {
            throw new Error('Please verify inputs. One or more parameters are missing.');
        }
        ;
        if (typeof name !== typeof "alpha" || typeof email !== typeof "alpha") {
            throw new Error('Please, verify inputs: "name", "email" and "type" must to be string.');
        }
        ;
        if (type.toUpperCase() !== Data_1.types.ADMIN && type.toUpperCase() !== Data_1.types.NORMAL) {
            throw new Error('Please, verify "type" input: values must to be "Admin" or "Normal".');
        }
        ;
        if (typeof age !== typeof 1) {
            throw new Error('Verify input "age": must to be number.');
        }
        ;
        Data_1.users.filter((u) => {
            if (u.id === id) {
                u.name = name,
                    u.email = email,
                    u.type = type,
                    u.age = age;
                isUser = true;
            }
        });
        if (isUser === false) {
            throw new Error('User not found.');
        }
        res.send(Data_1.users);
    }
    catch (error) {
        switch (error.message) {
            case 'Please verify inputs: ID must to be a number.':
                res.status(422);
                break;
            case 'Please verify inputs. Missing values.':
                res.status(422);
                break;
            case 'Please verify inputs. One or more parameters are missing.':
                res.status(422);
                break;
            case 'Please, verify type of "name": must to be string.':
                res.status(422);
                break;
            case 'Please, verify "type" input: values must to be "Admin" or "Normal".':
                res.status(422);
                break;
            case 'Verify input "age": must to be number.':
                res.status(422);
                break;
            case 'User not found.':
                res.status(404);
                break;
            default:
                res.status(500);
        }
        res.send(error.message);
    }
});
//Exercício 7
app.delete('/users/:id', (req, res) => {
    try {
        const id = Number(req.params.id);
        let isUser = false;
        if (id < 0) {
            throw new Error('Please verify input: "id" must to be a number.');
        }
        const newList = Data_1.users.filter((u) => {
            if (u.id === id) {
                isUser = true;
            }
            return u.id !== id;
        });
        if (isUser === false) {
            throw new Error('User not found.');
        }
        res.send(newList);
    }
    catch (error) {
        switch (error.message) {
            case 'Please verify input: "id" must to be a number.':
                res.status(422);
                break;
            case 'User not found.':
                res.status(404);
                break;
            default:
                res.status(500);
        }
        res.send(error.message);
    }
});
//Starting listener >>>>>>
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
