//第一個區塊 內建模組


//第二個區塊 第三方模組(套件)
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views'); // 預設路徑就是 views，如果沒有變動，可以省略此設定

//middleware 中介路由

// app.use((req, res, next) => {
// 	console.log('Hello!');
// 	next();
// });

// app.use((req, res, next) => {
// 	console.log('World!');
//     next();
// });

//static可以讓監控的資料夾下的public資料夾被選定，再利用get回傳index.html畫面
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.status(200)
        .render('index', {
            pageTitle: "this is my home"
        })
        // .sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/login', (req, res) => {
    res.status(200)
        .render('login', {
            pageTitle: "Login Page"
        })
        // .sendFile(path.join(__dirname, 'views', 'login.html'));
});


app.post('/login', (req, res) => {
    const { email, password} = req.body;
        if(email && password) {
            res.redirect('/')
        } else {
            console.log("欄位尚未填寫完成");
        }
        console.log('Form Data:', req.body);
        console.log('Form email:', email);
        console.log('Form password:', password);
})

//使用萬用路由來顯示404要放在所有路由的最後面，否則之前設定的路由都會被導到404.html
app.get('*', (req, res) => {
    res.status(404)
        .render('404', {
            pageTitle: "Oops! Not Found This Page :("
        })
        // .sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000, () => {
	console.log('Web Server is running on port 3000');
});

//第三個區塊 自建模組


/////////////////////////////////////////////