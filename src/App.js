import React from 'react';
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";

const App = () => {
	return (
		<div className='app'>
			<NavBar/>
			<AppRouter/>
		</div>
	);
};

export default App;
