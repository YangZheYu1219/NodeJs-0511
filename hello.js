// hello.js
const sayHello = () => {
    console.log('Hello!');
};
const sayGoodnight = () => {
	console.log('Goodnight')
}

// module.exports = {
// 	sayHello: sayHello,
// 	sayGoodnight: sayGoodnight,
// 	title: 'I am Hello Module'
// };


//物件寫法 如果key/value一樣 可以簡寫成下列示範
module.exports = {
	sayHello,
	sayGoodnight,
	title: 'I am Hello Module'
};

