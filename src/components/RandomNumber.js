import React from 'react';
import { fetchRandomNumber } from "../http/homeAPI";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const RandomNumber = () => {
	const number = useSelector(state => state.randomNumber)
	const dispatch = useDispatch()

	const updateRandomNumber = () => {
		dispatch(fetchRandomNumber())
	}

	return (
		<Container
			className='d-flex justify-content-center'
			style={{flexDirection:'column'}}
		>
			<Button onClick={updateRandomNumber}>
				Generate Random Number
			</Button>
			<h2
				style={{margin:'20px 0', textAlign:'center'}}
			>
				{ number }
			</h2>
		</Container>
	);
};

export default RandomNumber;
