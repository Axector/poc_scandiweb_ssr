import React, {useEffect, useState} from 'react';
import { fetchRandomNumber } from "../http/homeAPI";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const RandomNumber = () => {
	const [randomNumber, setRandomNumber] = useState(0)
	const number = useSelector(state => state.randomNumber) ?? 0
	const dispatch = useDispatch()

	useEffect(() => {
		updateRandomNumber()
	}, [])

	const updateRandomNumber = () => {
		dispatch(fetchRandomNumber())
		setRandomNumber(number)
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
				{ randomNumber }
			</h2>
		</Container>
	);
};

export default RandomNumber;
