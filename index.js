const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const pathJson = path.join(__dirname, 'count.json');

// let counter = {
//     "/": 0,
//     "/about": 0
// };

// fs.writeFileSync(pathJson, JSON.stringify(counter, null, 2));

app.get('/', (req, res) => {
    const homeCount = fs.readFileSync(pathJson, 'utf-8');
    const result = JSON.parse(homeCount);
    res.send(`<h1>Добро пожаловать на главную страницу</h1> 
            <a href="/about">Перейти на страницу обо мне</a>
            <p>Количество посещений страницы: ${result['/']}`);
    result['/']++;
    fs.writeFileSync(pathJson, JSON.stringify(result, null, 2));
});

app.get('/about', (req, res) => {
    const homeCount = fs.readFileSync(pathJson, 'utf-8');
    const result = JSON.parse(homeCount);
    res.send(`<h1>Добро пожаловать на страницу обо мне</h1>
    <a href="/">Перейти на главную страницу</a>
    <p>Количество посещений страницы: ${result['/about']}`);
    result['/about']++;
    fs.writeFileSync(pathJson, JSON.stringify(result, null, 2));
});

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});