class HomeController {
	getRandomNumberByRoute(req, res) {
		const number = Math.floor(Math.random() * 1000);
		res.header("Access-Control-Allow-Origin", "*");
		res.send(`${ number }`)
	}

	getRandomNumber() {
		return Math.floor(Math.random() * 1000)
	}
}

module.exports = new HomeController()
