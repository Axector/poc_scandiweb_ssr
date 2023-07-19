import React from 'react';
import { Container } from "react-bootstrap";
import RandomNumber from "../components/RandomNumber";
import {useSelector} from "react-redux";

const Home = () => {
	const text = useSelector(state => state.homeText)

	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{height: 500, flexDirection:'column'}}
		>
			<div
				className='d-flex justify-content-center'
				style={{height:100, fontSize:50}}
			>
				Homepage
			</div>
			<p>{ text }</p>
			<RandomNumber/>
		</Container>
	);
};

export default Home;
