class HomeController {
	getRandomNumber(req, res) {
		const number = Math.floor(Math.random() * 1000)
		res.header("Access-Control-Allow-Origin", "*");
		res.send(`${number}`)
	}
}

module.exports = new HomeController()
