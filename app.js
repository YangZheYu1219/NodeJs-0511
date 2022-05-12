//第一個區塊 內建模組


//第二個區塊 第三方模組(套件)
const express = require('express');
const path = require('path');

const app = express();

//middleware 中介路由

app.use((req, res, next) => {
	console.log('Hello!');
	next();
});

app.use((req, res, next) => {
	console.log('World!');
    next();
});

//static可以讓監控的資料夾下的public資料夾被選定，再利用get回傳index.html畫面
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.status(200)
        .sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/login', (req, res) => {
    res.status(200)
        .sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.listen(3000, () => {
	console.log('Web Server is running on port 3000');
});

//第三個區塊 自建模組


/////////////////////////////////////////////