import express from 'express'
import fs from 'fs'
import path from 'path'
import React from "react";
import { renderToString } from 'react-dom/server'
import { StaticRouter } from "react-router-dom/server";
import router from "./routes";
import { configureStore } from "@reduxjs/toolkit";
import { numberReducer } from "../src/reducers";
import { Provider } from "react-redux";
import App from "../src/App";

const app = express()
const port = 5000

app.use('/api', router)

app.use('^/$', (req, res) => {
	fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
		if (err) {
			console.error(err)
			return res.status(500).send('Something went wrong')
		}

		const store = configureStore({
			reducer: numberReducer
		})

		const html = renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url}>
					<App/>
				</StaticRouter>
			</Provider>
		)

		return res.send(data.replace('<div id="root"></div>', `<div id="root">${html}</div>`))
	})
})

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(port, () => console.log('Server launched'))
