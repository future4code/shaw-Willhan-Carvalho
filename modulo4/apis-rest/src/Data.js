"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.types = void 0;
var types;
(function (types) {
    types["ADMIN"] = "ADMIN";
    types["NORMAL"] = "NORMAL";
})(types = exports.types || (exports.types = {}));
exports.users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: types.ADMIN,
        age: 12,
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: types.NORMAL,
        age: 36,
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: types.NORMAL,
        age: 21,
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: types.NORMAL,
        age: 17,
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: types.ADMIN,
        age: 17,
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: types.ADMIN,
        age: 60,
    },
];
