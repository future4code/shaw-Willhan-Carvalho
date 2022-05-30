"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userBase = [
    {
        id: 1,
        name: "Willhan marques ",
        phone: "(66)99695-0327",
        email: "will09@gmail.com",
        website: "github.com/willmarques09",
    },
    {
        id: 2,
        name: "Pablo",
        phone: "(21)1111-0000",
        email: "pantera@gmail.com",
        website: "github.com/pantera",
    },
    {
        id: 3,
        name: "Leticia",
        phone: "(91)9000-9000",
        email: "le@gmail.com",
        website: "github.com/le",
    },
    {
        id: 4,
        name: "servulo",
        phone: "(71)9999-9999",
        email: "sevulo@gmail.com",
        website: "github.com/servulo",
    },
    {
        id: 5,
        name: "andreyna",
        phone: "(66)9695-0327",
        email: "drica@gmail.com",
        website: "github.com/andreyna",
    },
    {
        id: 6,
        name: "cleonice",
        phone: "(66)9966-5566",
        email: "cleo@gmail.com",
        website: "github.com/cleo",
    },
];
const postsBase = [
    {
        id: 1,
        title: "Opa",
        body: "Beleza?",
        userId: 1,
    }, {
        id: 2,
        title: "iiiiih",
        body: "Beleza?",
        userId: 3,
    },
];
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
app.get("/users", (req, res) => {
    res.send(userBase);
});
app.get("/posts", (req, res) => {
    req.query.id
        ? res.send(postsBase.map((post) => {
            if (Number(req.query.id) === post.userId)
                return post;
        }))
        : res.send(postsBase);
});
