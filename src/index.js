import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { numberReducer } from "./reducers";

const store = configureStore({
	reducer: numberReducer,
	preloadedState: window.__INITIAL_STATE__
})

ReactDOM.hydrateRoot(
	document.getElementById("root"),
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)
