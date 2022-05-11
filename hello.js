const path = require('path');
// hello.js
const sayHello = () => {
    console.log('Hello!');
};
const sayGoodnight = () => {
	console.log('Goodnight')
}

// module.exports = {
// 	sayHello: sayHello,ㄇㄛ
// 	sayGoodnight: sayGoodnight,
// 	title: 'I am Hello Module'
// };

console.log('dirname', __dirname);
console.log('filename', __filename);
console.log(path.join(__dirname, 'index.js'));
console.log()

//物件寫法 如果key/value一樣 可以簡寫成下列示範
module.exports = {
	sayHello,
	sayGoodnight,
	title: 'I am Hello Module'
};

